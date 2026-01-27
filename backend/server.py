from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

# --------------------------------------------------
# Load environment variables
# --------------------------------------------------
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# --------------------------------------------------
# Validate required environment variables
# --------------------------------------------------
MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

if not MONGO_URL or not DB_NAME:
    raise RuntimeError("MONGO_URL or DB_NAME is not set in .env")

# --------------------------------------------------
# MongoDB connection
# --------------------------------------------------
client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# --------------------------------------------------
# App & Router
# --------------------------------------------------
app = FastAPI()
api_router = APIRouter(prefix="/api")

# --------------------------------------------------
# Import routes and inject DB
# --------------------------------------------------
from routes import contact
contact.set_database(db)

# --------------------------------------------------
# Models
# --------------------------------------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str

# --------------------------------------------------
# Routes
# --------------------------------------------------
@api_router.get("/")
async def root():
    return {"message": "Backend is running"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())

    # MongoDB can store datetime directly
    await db.status_checks.insert_one(status_obj.model_dump())

    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find(
        {}, {"_id": 0}
    ).to_list(1000)

    return status_checks

# --------------------------------------------------
# Register routers
# --------------------------------------------------
app.include_router(api_router)
app.include_router(contact.router, prefix="/api", tags=["contact"])

# --------------------------------------------------
# CORS
# --------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.getenv("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------------------------
# Logging
# --------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# --------------------------------------------------
# Shutdown event
# --------------------------------------------------
@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()










# from fastapi import FastAPI, APIRouter
# from dotenv import load_dotenv
# from starlette.middleware.cors import CORSMiddleware
# from motor.motor_asyncio import AsyncIOMotorClient
# import os
# import logging
# from pathlib import Path
# from pydantic import BaseModel, Field, ConfigDict
# from typing import List
# import uuid
# from routes import contact
# from datetime import datetime, timezone


# ROOT_DIR = Path(__file__).parent
# load_dotenv(ROOT_DIR / '.env')

# # MongoDB connection
# mongo_url = os.getenv("MONGO_URL")
# if not mongo_url:
#     raise RuntimeError("MONGO_URL is not set")
# client = AsyncIOMotorClient(mongo_url)
# db = client[os.environ['DB_NAME']]

# # Create the main app without a prefix
# app = FastAPI()

# # Create a router with the /api prefix
# api_router = APIRouter(prefix="/api")

# # Import contact routes
# from routes import contact
# contact.set_database(db)


# # Define Models
# class StatusCheck(BaseModel):
#     model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
#     id: str = Field(default_factory=lambda: str(uuid.uuid4()))
#     client_name: str
#     timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# class StatusCheckCreate(BaseModel):
#     client_name: str

# # Add your routes to the router instead of directly to app
# @api_router.get("/")
# async def root():
#     return {"message": "Hello World"}

# @api_router.post("/status", response_model=StatusCheck)
# async def create_status_check(input: StatusCheckCreate):
#     status_dict = input.model_dump()
#     status_obj = StatusCheck(**status_dict)
    
#     # Convert to dict and serialize datetime to ISO string for MongoDB
#     doc = status_obj.model_dump()
#     doc['timestamp'] = doc['timestamp'].isoformat()
    
#     _ = await db.status_checks.insert_one(doc)
#     return status_obj

# @api_router.get("/status", response_model=List[StatusCheck])
# async def get_status_checks():
#     # Exclude MongoDB's _id field from the query results
#     status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
#     # Convert ISO string timestamps back to datetime objects
#     for check in status_checks:
#         if isinstance(check['timestamp'], str):
#             check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
#     return status_checks

# # Include the router in the main app
# app.include_router(api_router)
# app.include_router(contact.router, prefix="/api", tags=["contact"])

# app.add_middleware(
#     CORSMiddleware,
#     allow_credentials=True,
#     allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Configure logging
# logging.basicConfig(
#     level=logging.INFO,
#     format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
# )
# logger = logging.getLogger(__name__)

# @app.on_event("shutdown")
# async def shutdown_db_client():
#     client.close()


# from fastapi import FastAPI
# from services.email_service import send_contact_email

# app = FastAPI()

# @app.get("/")
# def root():
#     return {"message": "Backend is running"}

# @app.get("/test-email")
# async def test_email():
#     return await send_contact_email(
#         name="Dev",
#         email="devjari235@gmail.com",
#         subject="Test Email",
#         message="This is a test email from backend"
#     )

