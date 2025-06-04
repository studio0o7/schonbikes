# Email Service Setup

This project uses Nodemailer with Gmail to send form responses via email.

## Environment Variables

Add the following variables to your `.env.local` file:

```
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password-from-google
```

## Getting a Google App Password

To use Gmail with Nodemailer, you need to create an App Password:

1. Enable 2-step verification on your Google account
   - Go to your Google Account > Security > 2-Step Verification

2. Generate an App Password
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" as the app and your device
   - Google will generate a 16-character app password for you to use

3. Use this password in your `.env.local` file as `EMAIL_APP_PASSWORD`

## Using the Email Service

Import the email service in your form component:

```typescript
import { sendEmail } from '@/utils/emailService';

// Inside your form submission handler:
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Example form data
  const formData = {
    name: "John Doe",
    email: "john@example.com",
    message: "This is a test message"
  };
  
  // Send the email
  const result = await sendEmail({
    subject: `New Form Submission: ${formData.name}`,
    message: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
  });
  
  if (result.success) {
    // Handle success (show message, reset form, etc.)
  } else {
    // Handle error
    console.error(result.error);
  }
};
```

## Customizing Email Content

The email service accepts the following properties:

- `subject`: The email subject line (required)
- `message`: Plain text message content (required)
- `htmlMessage`: HTML formatted message (optional)
- `to`: Recipient email address (optional, defaults to EMAIL_USER)

For a more complex HTML email, you can use the `htmlMessage` property:

```typescript
await sendEmail({
  subject: "HTML Email Example",
  message: "This is a fallback plain text message",
  htmlMessage: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h1 style="color: #0066cc;">New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    </div>
  `,
});
``` 