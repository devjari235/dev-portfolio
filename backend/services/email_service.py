import os
import asyncio
import logging
import resend
from datetime import datetime
from dotenv import load_dotenv
from zoneinfo import ZoneInfo


# Load environment variables from .env
load_dotenv()

logger = logging.getLogger(__name__)

# ✅ FIX 1: Correct way to load API key
resend.api_key = os.getenv("RESEND_API_KEY")

# ✅ FIX 2: Safe sender for Resend test mode
SENDER_EMAIL = os.getenv("SENDER_EMAIL", "onboarding@resend.dev")

# ✅ FIX 3: Your Resend account email (allowed)
RECIPIENT_EMAIL = os.getenv("RESEND_ACCOUNT_EMAIL", "devjari235@gmail.com")


def create_contact_email_html(name: str, email: str, subject: str, message: str) -> str:
    """Create HTML email template for contact form submissions"""
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
            <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                        <!-- Header -->
                        <tr>
                            <td style="background: linear-gradient(135deg, #0B0F14 0%, #1a1f2e 100%); padding: 30px; text-align: center;">
                                <h1 style="color: #38FF62; margin: 0; font-size: 24px;">New Contact Form Message</h1>
                                <p style="color: #9CA3AF; margin: 10px 0 0 0; font-size: 14px;">From your portfolio website</p>
                            </td>
                        </tr>

                        <!-- Content -->
                        <tr>
                            <td style="padding: 30px;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td style="padding-bottom: 20px;">
                                            <table width="100%" cellpadding="8" cellspacing="0" style="background-color: #f8f9fa; border-radius: 6px;">
                                                <tr>
                                                    <td style="color: #6c757d; font-size: 12px; font-weight: bold;">From</td>
                                                    <td>{name}</td>
                                                </tr>
                                                <tr>
                                                    <td style="color: #6c757d; font-size: 12px; font-weight: bold;">Email</td>
                                                    <td>{email}</td>
                                                </tr>
                                                <tr>
                                                    <td style="color: #6c757d; font-size: 12px; font-weight: bold;">Subject</td>
                                                    <td>{subject or 'No subject'}</td>
                                                </tr>
                                                <tr>
                                                    <td style="color: #212529; font-size: 14px; padding-top: 8px;">
                                                    {datetime.now(ZoneInfo("Asia/Kolkata")).strftime('%B %d, %Y at %I:%M %p IST')}
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <p>{message}</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr>
                            <td style="background-color: #f8f9fa; padding: 20px; text-align: center;">
                                <p style="font-size: 12px;">© 2025 Dev Jariwala Portfolio</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    """


async def send_contact_email(name: str, email: str, subject: str, message: str) -> dict:
    """Send contact form notification email"""
    try:
        html_content = create_contact_email_html(name, email, subject, message)

        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": f"New Contact Form Message from {name}",
            "html": html_content,
        }

        email_response = await asyncio.to_thread(resend.Emails.send, params)

        return {
            "success": True,
            "email_id": email_response.get("id"),
        }

    except Exception as e:
        print("EMAIL ERROR:", e)  # IMPORTANT for debugging
        return {
            "success": False,
            "error": str(e),
        }
