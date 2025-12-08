# Deploy to Vercel - Step by Step Guide

## 🚀 Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Konaseema Essence"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/konaseema-essence.git
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub

3. **Import Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

4. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

5. **Environment Variables** (if needed)
   - Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` if you have one
   - Click "Deploy"

6. **Wait for Deployment**
   - Vercel will build and deploy automatically
   - You'll get a live URL like: `konaseema-essence.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name? `konaseema-essence` (or your choice)
   - Directory? `./` (press Enter)
   - Override settings? **No**

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📋 Pre-Deployment Checklist

### 1. Update package.json scripts (if needed)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 2. Check next.config.mjs
Make sure image domains are configured:
```javascript
images: {
  domains: ['images.unsplash.com', 'picsum.photos'],
  remotePatterns: [...]
}
```

### 3. Environment Variables (Optional)
If you need Google Maps API:
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` = `your_api_key`

### 4. Build Test Locally
```bash
npm run build
```
Make sure it builds without errors!

## 🔧 Vercel Configuration

### vercel.json (Optional)
Create `vercel.json` in root for custom settings:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

## 🌐 Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel will handle SSL automatically

## 📝 Post-Deployment

### Verify Deployment
- ✅ Check all pages load correctly
- ✅ Test language switching (EN/TE)
- ✅ Verify images load
- ✅ Test navigation
- ✅ Check mobile responsiveness

### Monitor
- Vercel Dashboard shows:
  - Build logs
  - Analytics
  - Performance metrics
  - Error logs

## 🐛 Troubleshooting

### Build Fails
1. Check build logs in Vercel Dashboard
2. Test locally: `npm run build`
3. Fix any TypeScript/ESLint errors
4. Ensure all dependencies are in `package.json`

### Images Not Loading
1. Verify `next.config.mjs` has correct image domains
2. Check image URLs are accessible
3. Review browser console for CORS errors

### Environment Variables Not Working
1. Ensure variables start with `NEXT_PUBLIC_` for client-side
2. Redeploy after adding variables
3. Check variable names match exactly

## 🎯 Quick Commands

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove
```

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Docs](https://vercel.com/docs/cli)

---

**Your site will be live at:** `https://your-project-name.vercel.app`

