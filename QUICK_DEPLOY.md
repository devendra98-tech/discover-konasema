# 🚀 Quick Vercel Deployment Guide

## Method 1: GitHub + Vercel (Recommended - 5 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Konaseema Essence website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/konaseema-essence.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Click **"Deploy"** (settings are auto-detected)
5. Wait 2-3 minutes → Your site is live! 🎉

---

## Method 2: Vercel CLI (3 minutes)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (from project directory)
vercel

# Deploy to production
vercel --prod
```

---

## ✅ Before Deploying

1. **Test build locally:**
   ```bash
   npm run build
   ```

2. **Check for errors** - Fix any TypeScript/build errors

3. **Optional: Add Google Maps API key** in Vercel Dashboard → Environment Variables

---

## 🎯 Your Site Will Be Live At:
- Preview: `https://konaseema-essence-xxx.vercel.app`
- Production: `https://konaseema-essence.vercel.app` (or custom domain)

---

## 📝 That's It!

Vercel automatically:
- ✅ Detects Next.js
- ✅ Runs `npm install` and `npm run build`
- ✅ Deploys with HTTPS
- ✅ Sets up CDN globally
- ✅ Creates preview URLs for every commit

**Need help?** Check `DEPLOY_VERCEL.md` for detailed instructions.
