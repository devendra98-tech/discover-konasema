# Deploy Konaseema Essence to Vercel

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
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

4. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto)
   - **Output Directory**: `.next` (auto)
   - **Install Command**: `npm install` (auto)

5. **Environment Variables** (Optional)
   - If you have Google Maps API key:
     - Add: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here`

6. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at `your-project.vercel.app`

---

## 📦 Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# From your project directory
vercel

# For production deployment
vercel --prod
```

### Step 4: Follow Prompts
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No** (first time)
- Project name? **konaseema-essence** (or your choice)
- Directory? **./** (current directory)
- Override settings? **No**

---

## ⚙️ Configuration Files

### `vercel.json` (Optional - Auto-detected for Next.js)
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Environment Variables (if needed)
Add in Vercel Dashboard → Project Settings → Environment Variables:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (if using Google Maps)

---

## 🔧 Pre-Deployment Checklist

### 1. Update `package.json` Scripts
Ensure these scripts exist:
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

### 2. Check `next.config.mjs`
Your config should allow external images:
```javascript
images: {
  domains: ['images.unsplash.com', 'picsum.photos'],
  remotePatterns: [...]
}
```

### 3. Test Build Locally
```bash
npm run build
npm start
```
Visit `http://localhost:3000` to verify everything works.

### 4. Check for Environment Variables
- Google Maps API key (optional)
- Any API keys or secrets

---

## 📝 Post-Deployment

### Custom Domain (Optional)
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Environment Variables
- Add any required environment variables in Vercel Dashboard
- Redeploy after adding variables

### Analytics (Optional)
- Enable Vercel Analytics in Project Settings
- Track page views and performance

---

## 🐛 Troubleshooting

### Build Fails
1. Check build logs in Vercel Dashboard
2. Common issues:
   - Missing dependencies → Check `package.json`
   - TypeScript errors → Run `npm run build` locally first
   - Image domain issues → Update `next.config.mjs`

### Images Not Loading
- Ensure `next.config.mjs` has correct image domains
- Check image URLs are accessible
- Verify `unoptimized` flag if needed

### 404 Errors
- Check routing structure
- Ensure all pages are in `app/` directory
- Verify dynamic routes are correct

---

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

---

## 📊 Vercel Features

- **Automatic HTTPS** - SSL certificates included
- **Global CDN** - Fast loading worldwide
- **Automatic Deployments** - On every git push
- **Preview Deployments** - For pull requests
- **Analytics** - Built-in performance tracking
- **Edge Functions** - Serverless functions support

---

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Dashboard](https://vercel.com/dashboard)

---

**Your site will be live in minutes!** 🎉

