# EmailJS Setup Instructions

This guide will help you configure EmailJS to send contact form emails to info@dhdnexus.com.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (200 emails/month on free tier)
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

**Subject:** New Contact Form Submission from {{name}}

**Content:**
```
You have received a new message from your website contact form.

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Company: {{company}}
Country: {{country}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. In the **To Email** field, enter: `info@dhdnexus.com`
5. In the **From Name** field, enter: `{{from_name}}`
6. In the **Reply To** field, enter: `{{reply_to}}`
7. Save the template and note your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Update Configuration

1. Open `js/main.js`
2. Find the `EMAILJS_CONFIG` object (around line 106)
3. Replace the placeholder values:
   - `YOUR_PUBLIC_KEY` → Your Public Key from Step 4
   - `YOUR_SERVICE_ID` → Your Service ID from Step 2
   - `YOUR_TEMPLATE_ID` → Your Template ID from Step 3

Example:
```javascript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "abc123xyz",
  SERVICE_ID: "service_gmail",
  TEMPLATE_ID: "template_contact",
  TO_EMAIL: "info@dhdnexus.com"
};
```

## Step 6: Test the Form

1. Open `contact.html` in your browser
2. Fill out the contact form
3. Submit the form
4. Check your email at info@dhdnexus.com

## Troubleshooting

- **"Email service is not configured"**: Make sure you've updated all three IDs in the config
- **"EmailJS library not loaded"**: Check your internet connection and that the EmailJS CDN is accessible
- **Emails not arriving**: Check your spam folder and verify your EmailJS service is properly connected
- **Template errors**: Make sure all template variables match exactly (case-sensitive)

## Alternative: Quick Setup with Web3Forms

If you prefer a simpler setup without account creation, you can use Web3Forms instead. Contact me for instructions.
