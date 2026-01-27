# Backend & Frontend Integration Contracts

## Contact Form Implementation

### Current State (Frontend Mock)
- **File**: `/app/frontend/src/components/Contact.jsx`
- **Mock Data**: Form submits with setTimeout, shows toast notification
- **Fields**: name, email, subject, message

### Backend Requirements

#### 1. MongoDB Schema - Contact Messages
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, validated),
  subject: String (optional),
  message: String (required),
  createdAt: DateTime (auto),
  isRead: Boolean (default: false)
}
```

#### 2. API Endpoint
**POST /api/contact**
- Request Body:
  ```json
  {
    "name": "string",
    "email": "string (email format)",
    "subject": "string (optional)",
    "message": "string"
  }
  ```
- Response Success (200):
  ```json
  {
    "success": true,
    "message": "Message sent successfully"
  }
  ```
- Response Error (400/500):
  ```json
  {
    "success": false,
    "error": "Error message"
  }
  ```

#### 3. Functionality
- **Database Storage**: Save all messages to MongoDB `contact_messages` collection
- **Email Notification**: Send email to devjari235@gmail.com with message details
- **Validation**: 
  - Name: required, min 2 chars
  - Email: required, valid email format
  - Message: required, min 10 chars
  - Subject: optional

#### 4. Email Service
- Use SMTP for sending emails
- Email template with sender details
- Include: name, email, subject, message, timestamp

### Frontend Integration Changes

#### File: `/app/frontend/src/components/Contact.jsx`

**Changes Required:**
1. Replace mock setTimeout with actual API call
2. Use axios to POST to `${BACKEND_URL}/api/contact`
3. Handle loading state
4. Display success/error toasts based on API response
5. Reset form only on successful submission

**Integration Code:**
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Validation
  if (!formData.name || !formData.email || !formData.message) {
    toast({ title: 'Error', description: 'Please fill in all required fields', variant: 'destructive' });
    setIsSubmitting(false);
    return;
  }

  try {
    const response = await axios.post(`${API}/contact`, formData);
    
    if (response.data.success) {
      toast({ title: 'Success!', description: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    toast({ 
      title: 'Error', 
      description: error.response?.data?.error || 'Failed to send message. Please try again.',
      variant: 'destructive' 
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Backend Files to Create/Modify

1. **Create**: `/app/backend/routes/contact.py` - Contact form routes
2. **Create**: `/app/backend/models/contact.py` - Contact message model
3. **Create**: `/app/backend/services/email_service.py` - Email sending logic
4. **Modify**: `/app/backend/server.py` - Include contact routes

### Testing Checklist
- [ ] POST /api/contact saves message to database
- [ ] Email sent to devjari235@gmail.com
- [ ] Frontend form submits successfully
- [ ] Form validation works
- [ ] Success/error messages display correctly
- [ ] Form resets after successful submission
- [ ] Error handling for network failures

### Notes
- Mock data in `mock.js` will remain for projects/experience until user provides real data
- Social links already updated with real URLs
- Contact form is the only feature requiring backend integration currently
