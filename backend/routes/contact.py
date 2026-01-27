from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorDatabase
import logging
from models.contact import ContactMessage, ContactMessageCreate
from services.email_service import send_contact_email

logger = logging.getLogger(__name__)

router = APIRouter()

# This will be set when including the router in main app
db: AsyncIOMotorDatabase = None

def set_database(database: AsyncIOMotorDatabase):
    global db
    db = database

@router.post("/contact")
async def create_contact_message(contact_data: ContactMessageCreate):
    """
    Create a new contact message and send email notification
    """
    try:
        # Create contact message object
        contact_message = ContactMessage(**contact_data.dict())
        
        # Save to database
        result = await db.contact_messages.insert_one(
            contact_message.dict(exclude={"_id"})
        )
        
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="Failed to save message")
        
        # Send email notification (non-blocking)
        email_result = await send_contact_email(
            name=contact_data.name,
            email=contact_data.email,
            subject=contact_data.subject or "No subject",
            message=contact_data.message
        )
        
        if not email_result.get("success"):
            logger.warning(f"Message saved but email failed: {email_result.get('error')}")
        
        return {
            "success": True,
            "message": "Message sent successfully",
            "message_id": contact_message.id
        }
        
    except Exception as e:
        logger.error(f"Error creating contact message: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to send message: {str(e)}")

@router.get("/contact/messages")
async def get_contact_messages(limit: int = 50, skip: int = 0):
    """
    Get all contact messages (for admin use)
    """
    try:
        messages = await db.contact_messages.find(
            {},
            {"_id": 0}
        ).sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
        
        return {
            "success": True,
            "count": len(messages),
            "messages": messages
        }
        
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch messages")
