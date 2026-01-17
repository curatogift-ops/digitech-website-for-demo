# Vercel Environment Variables Configuration

Add these environment variables to your Vercel project:

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add the following variables:

## Required Environment Variables

| Variable Name    | Value                           | Description                          |
|------------------|---------------------------------|--------------------------------------|
| EMAIL_USER       | laprrkassociates@gmail.com      | Gmail account for sending emails     |
| EMAIL_PASSWORD   | zlbm vgex wybf pfth             | Gmail App Password (NOT regular pwd) |
| EMAIL_TO         | laprrkassociates@gmail.com      | Admin email to receive submissions   |

## Important Notes

- **Production, Preview, Development**: Add these variables to ALL environments
- **Gmail App Password**: Must use App Password, not your regular Gmail password
- **Security**: Never commit `.env.local` to Git
- After adding variables, redeploy your application

## How to Generate Gmail App Password

1. Go to https://myaccount.google.com/
2. Click "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Search for "App passwords"
5. Select "Mail" and "Other (Custom name)"
6. Name it "Vercel Website Contact Form"
7. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)
8. Use this password in EMAIL_PASSWORD variable
