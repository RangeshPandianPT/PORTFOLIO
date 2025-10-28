# 🚀 Vercel Deployment Guide

## ✅ What You Need

Your portfolio is ready to deploy! Here's everything you need:

---

## 📋 Pre-Deployment Checklist

- ✅ Build tested locally (`npm run build` - COMPLETED)
- ✅ `.gitignore` configured to exclude `.env`
- ✅ `package-lock.json` regenerated
- ✅ EmailJS credentials ready

---

## 🎯 Deploy to Vercel (Step-by-Step)

### Step 1: Push to GitHub

```powershell
# Add all files (excluding .env which is in .gitignore)
git add .

# Commit
git commit -m "Initial portfolio deployment with working contact form"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to:** https://vercel.com/
2. **Sign in** with GitHub
3. **Click "Add New Project"**
4. **Import your GitHub repository**
5. **Configure project:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install`

### Step 3: Add Environment Variables

**CRITICAL:** Before deploying, add these environment variables:

In Vercel dashboard:
1. Go to **Project Settings → Environment Variables**
2. Add these **three variables** (one at a time):

```
Name: VITE_EMAILJS_SERVICE_ID
Value: service_xkt3i0v

Name: VITE_EMAILJS_TEMPLATE_ID
Value: template_eq1778f

Name: VITE_EMAILJS_PUBLIC_KEY
Value: UnHh-_VALSJqlt3EK
```

**Environment:** Select **Production, Preview, and Development** for all three

### Step 4: Deploy!

Click **"Deploy"** button

Vercel will:
- Install dependencies
- Run the build
- Deploy your site
- Give you a live URL (e.g., `your-portfolio.vercel.app`)

---

## 🧪 Test Your Live Site

After deployment:

1. **Visit your Vercel URL**
2. **Test the contact form:**
   - Fill out all fields
   - Submit
   - Check `rangeshpandian@gmail.com` for the email
3. **Test on mobile devices**
4. **Check all navigation links**
5. **Verify resume link opens your Google Drive**

---

## 🔧 If Build Fails on Vercel

### Error: "Cannot resolve @emailjs/browser"

**Solution:**
```powershell
# Locally, run:
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
git push
```

Then redeploy on Vercel.

### Error: "Environment variables not working"

**Solution:**
1. Check variable names start with `VITE_`
2. Make sure they're added to all environments (Production, Preview, Development)
3. Redeploy after adding variables

---

## 📱 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to **Project Settings → Domains**
2. Add your domain (e.g., `rangeshpandian.com`)
3. Follow DNS configuration instructions
4. Vercel automatically adds SSL certificate

---

## 🎨 Continuous Deployment

Once connected to GitHub:
- Every push to `main` = automatic deployment
- Pull requests = preview deployments
- Rollback anytime from Vercel dashboard

---

## ✅ Post-Deployment Checklist

- [ ] Site deployed successfully
- [ ] Contact form tested and emails arriving
- [ ] Resume link works
- [ ] All sections load correctly
- [ ] Mobile responsive
- [ ] Theme toggle works
- [ ] Navigation smooth scrolling works

---

## 🆘 Troubleshooting

### Contact form not working on live site

1. **Check environment variables** in Vercel settings
2. **Verify variables start with** `VITE_` prefix
3. **Check browser console** for errors
4. **Test EmailJS dashboard** directly

### Build fails

1. **Run locally first:** `npm run build`
2. **Check build logs** in Vercel
3. **Ensure package-lock.json** is committed
4. **Verify Node version** (Vercel uses Node 18+ by default)

---

## 🎉 You're Live!

Once deployed, your portfolio will be accessible worldwide at your Vercel URL!

Share your live site:
- Add to resume
- LinkedIn profile
- GitHub profile
- Email signature
- Business cards

---

## 📊 Monitor Your Site

**Vercel Analytics (Free):**
- View page visits
- Track performance
- Monitor build times

**EmailJS Dashboard:**
- Track emails sent
- Check delivery status
- Monitor monthly quota (200 emails/month on free tier)

---

## 🔄 Future Updates

To update your live site:

```powershell
# Make changes locally
# Test: npm run dev

# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Vercel automatically deploys!
```

---

**Good luck with your deployment!** 🚀

Your portfolio is production-ready with:
✅ Professional design
✅ Working contact form
✅ Resume link
✅ All sections complete
✅ Optimized build
