# ✅ Contact Form Testing Checklist

Use this checklist to verify your live contact form is working correctly.

## Pre-Testing Setup

- [ ] EmailJS account created
- [ ] Email service connected (Gmail/Outlook/etc.)
- [ ] Email template created with correct variables
- [ ] `.env` file created with all three credentials
- [ ] Dev server restarted after adding `.env`

## Testing Steps

### Test 1: Form Validation
- [ ] Try submitting empty form → Should show required field warnings
- [ ] Try invalid email format → Should show email validation error
- [ ] All fields validated correctly ✅

### Test 2: Successful Email Send
- [ ] Fill form with valid data:
  - Name: Test User
  - Email: your-test@email.com
  - Subject: Test Contact Form
  - Message: This is a test message
- [ ] Click "Send Message"
- [ ] Success toast appears ("Message Sent! ✅")
- [ ] Form fields cleared automatically
- [ ] Check `rangeshpandian@gmail.com` inbox
- [ ] Email received with correct formatting ✅

### Test 3: Email Content Verification
Check the received email contains:
- [ ] Correct sender name (from form)
- [ ] Correct sender email (from form)
- [ ] Correct subject line
- [ ] Complete message text
- [ ] Reply-to is set to sender's email
- [ ] Professional formatting with your template ✅

### Test 4: Error Handling (Optional)
To test fallback behavior:
- [ ] Temporarily break EmailJS (use wrong service ID in `.env`)
- [ ] Submit form
- [ ] Error toast appears
- [ ] Mailto link opens with prefilled content
- [ ] Restore correct credentials ✅

### Test 5: Multiple Submissions
- [ ] Submit form 3-5 times in a row
- [ ] Each submission shows success
- [ ] All emails received
- [ ] No rate limiting issues (on free tier) ✅

### Test 6: Mobile Responsiveness
- [ ] Open on mobile device or resize browser
- [ ] Form is fully visible and usable
- [ ] Submit button works on mobile
- [ ] Toast notifications visible on mobile ✅

## Production Testing

After deploying to production:
- [ ] Add environment variables to hosting platform
- [ ] Submit test from live site
- [ ] Verify email delivery
- [ ] Test from different devices/browsers ✅

## Common Issues & Solutions

### ❌ "Failed to send message"
**Causes:**
- Incorrect EmailJS credentials
- Service not connected in EmailJS dashboard
- Network/firewall blocking EmailJS API
- Template ID mismatch

**Solutions:**
1. Double-check all IDs in `.env`
2. Verify service status in EmailJS dashboard
3. Check browser console for specific error
4. Try test send from EmailJS dashboard

### ❌ Email received but formatting broken
**Causes:**
- Template variables mismatch
- HTML template errors

**Solutions:**
1. Verify template variables match code (`from_name`, `from_email`, `subject`, `message`)
2. Test template from EmailJS dashboard
3. Check HTML syntax in template

### ❌ Mailto opens instead of sending
**Causes:**
- EmailJS configuration issue
- This is expected as fallback behavior

**Solutions:**
1. Check browser console for errors
2. Verify EmailJS credentials
3. Test EmailJS service connection

## Email Delivery Times

Typical delivery times:
- **Immediate:** 1-5 seconds (most common)
- **Delayed:** Up to 1 minute (during high load)
- **Check spam:** First emails may go to spam folder

## Rate Limits

EmailJS Free Tier:
- 200 emails/month
- No daily limit
- No per-hour limit

If you exceed limits:
- Upgrade to paid plan
- Or use multiple EmailJS accounts (not recommended)

## Success Criteria

✅ All tests passed = Contact form is fully functional!

You should be receiving real emails from your portfolio visitors now!

---

## Need Help?

- 📖 See [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md) for detailed setup
- 🔍 Check EmailJS dashboard "History" tab for sent emails
- 💬 EmailJS has excellent documentation at [emailjs.com/docs](https://www.emailjs.com/docs/)
