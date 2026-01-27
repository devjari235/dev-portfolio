from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=2)
    email: EmailStr
    subject: Optional[str] = None
    message: str = Field(..., min_length=10)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    is_read: bool = False

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2)
    email: EmailStr
    subject: Optional[str] = None
    message: str = Field(..., min_length=10)
