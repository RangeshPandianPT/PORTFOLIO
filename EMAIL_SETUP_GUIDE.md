# 📧 Email Setup Guide - Live Contact Form

This guide will help you set up **live email sending** for your portfolio contact form using EmailJS.

## Why EmailJS?

- ✅ **No backend required** - Works entirely client-side
- ✅ **Free tier available** - 200 emails/month free
- ✅ **Easy setup** - Takes less than 10 minutes
- ✅ **Reliable delivery** - Professional email service
- ✅ **No deployment complexity** - Just add environment variables

---

## 🚀 Quick Setup (Step-by-Step)

### Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Verify your email address

### Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service
4. Follow the provider-specific setup:

#### For Gmail:
- Click **"Connect Account"**
- Log in with your Google account (rangeshpandian@gmail.com)
- Grant EmailJS permission to send emails
- Click **"Create Service"**
- **Save your Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Use this template configuration:

**Template Name:** `portfolio_contact`

**Subject:**
```
New Portfolio Contact: {{subject}}
```

**Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
    📨 New Contact Form Submission
  </h2>
  
  <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p style="margin: 0 0 10px 0;"><strong>Name:</strong> {{from_name}}</p>
    <p style="margin: 0 0 10px 0;"><strong>Email:</strong> {{from_email}}</p>
    <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> {{subject}}</p>
  </div>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
    <div style="background: white; padding: 20px; border-left: 4px solid #6366f1; border-radius: 4px;">
      {{message}}
    </div>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
    <p>This email was sent from your portfolio contact form.</p>
    <p>Reply directly to: {{from_email}}</p>
  </div>
</div>
```

4. In **"Settings"** tab:
   - Set **"To Email"** to: `rangeshpandian@gmail.com`
   - Set **"From Name"** to: `{{from_name}}`
   - Set **"Reply To"** to: `{{from_email}}`

5. Click **"Save"**
6. **Copy your Template ID** (looks like `template_xxxxxxx`)

### Step 4: Get Your Public Key

1. Go to **"Account"** in the sidebar
2. Find **"Public Key"** section
3. **Copy your Public Key** (looks like a long string)

### Step 5: Configure Your Project

1. Create a `.env` file in your project root (if it doesn't exist):

```bash
# .env file
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual EmailJS credentials:
   - `service_xxxxxxx` → Your Service ID from Step 2
   - `template_xxxxxxx` → Your Template ID from Step 3
   - `your_public_key_here` → Your Public Key from Step 4

3. Add `.env` to your `.gitignore` (if not already there):

```bash
# .gitignore
.env
.env.local
```

### Step 6: Test Your Setup

1. Start your development server:
```powershell
npm run dev
```

2. Open your portfolio in the browser

3. Navigate to the Contact section

4. Fill out and submit the form

5. Check your email (rangeshpandian@gmail.com) - you should receive the message within seconds!

---

## 🎯 Production Deployment

When deploying to production (Vercel, Netlify, etc.), add these environment variables in your hosting platform:

### Vercel:
1. Go to your project → Settings → Environment Variables
2. Add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Netlify:
1. Go to Site settings → Environment variables
2. Add the same three variables

---

## ✨ Features Included

- ✅ Real-time email sending
- ✅ Form validation
- ✅ Success/error notifications (toasts)
- ✅ Mailto fallback (if EmailJS fails)
- ✅ Prevents duplicate submissions
- ✅ Beautiful email templates
- ✅ Reply-to configured automatically

---

## 🔒 Security Notes

- ✅ Public key is safe to expose (it's designed for client-side use)
- ✅ EmailJS has rate limiting built-in
- ✅ Your email credentials are never exposed
- ✅ EmailJS handles spam protection

---

## 📊 Free Tier Limits

EmailJS Free Plan includes:
- 200 emails per month
- 2 email services
- 3 email templates
- Basic support

For higher volume, upgrade to a paid plan at [EmailJS Pricing](https://www.emailjs.com/pricing/)

---

## 🐛 Troubleshooting

### Emails not sending?

1. **Check console for errors:**
   - Open browser DevTools → Console
   - Look for EmailJS error messages

2. **Verify credentials:**
   - Ensure `.env` file has correct values
   - Restart dev server after changing `.env`

3. **Check EmailJS dashboard:**
   - Go to "History" to see sent/failed emails
   - Check service connection status

4. **Gmail specific:**
   - Make sure you've granted EmailJS permission
   - Check if 2FA is blocking (you may need an app password)

### Mailto fallback opens instead?

- This means EmailJS failed - check the above troubleshooting steps
- The fallback ensures visitors can still contact you

---

## 🎉 You're Done!

Your contact form is now **LIVE** and will send real emails to `rangeshpandian@gmail.com`!

Test it thoroughly and enjoy seamless communication with visitors!

---

## 📝 Additional Tips

1. **Monitor your inbox** - Set up email filters/labels for portfolio contacts
2. **Respond quickly** - Visitors expect replies within 24-48 hours
3. **Check spam folder** - First emails might land there
4. **Update limits** - If you expect high traffic, consider upgrading

---

## 🔗 Useful Links

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [Support](https://www.emailjs.com/docs/sdk/troubleshooting/)
