# Deployment Guide - Vercel

This guide covers deploying your portfolio website to Vercel using Git integration.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your code pushed to a Git repository
- A Vercel account (free tier available at [vercel.com](https://vercel.com))

## Step 1: Prepare Your Repository

1. **Create a Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub** (or GitLab/Bitbucket):
   ```bash
   # Add your remote repository
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push to main branch
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel (One-Click Method)

### Option A: Import from Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your Git repository:
   - Click "Import Git Repository"
   - Authorize Vercel to access your Git provider
   - Select your portfolio repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Add environment variables (optional):
   - Key: `CONTACT_EMAIL`
   - Value: `meetnarola9@gmail.com`
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 3: Configure Environment Variables

If you plan to use serverless contact form endpoint:

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Environment Variables"
3. Add the following variable:
   - **Key**: `CONTACT_EMAIL`
   - **Value**: `meetnarola9@gmail.com`
4. Redeploy your application for changes to take effect

## Step 4: Set Up Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Click "Add Domain"
3. Enter your domain name (e.g., `meetnarola.com`)
4. Follow Vercel's instructions to configure DNS:
   - **For root domain**: Add A record pointing to Vercel's IP
   - **For subdomain**: Add CNAME record pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (usually 24-48 hours)

### DNS Configuration Examples

**For Namecheap:**
- Type: A Record
- Host: @
- Value: 76.76.21.21
- TTL: Automatic

**For Cloudflare:**
- Type: CNAME
- Name: @
- Target: cname.vercel-dns.com
- Proxy status: DNS only

## Step 5: Verify Deployment

1. Visit your Vercel deployment URL (e.g., `your-portfolio.vercel.app`)
2. Test all pages and navigation
3. Verify theme toggle works
4. Test contact form
5. Check responsive design on mobile

## Automatic Deployments

Once connected, Vercel automatically:
- Deploys production builds from your main branch
- Creates preview deployments for pull requests
- Rebuilds when you push new commits

## Common Troubleshooting

### Build Fails

**Error**: `Command "npm run build" exited with 1`

**Solutions**:
1. Verify `package.json` has correct build script
2. Check for TypeScript errors locally: `npm run build`
3. Ensure all dependencies are listed in `package.json`
4. Review build logs in Vercel dashboard

### 404 on Page Refresh

**Solution**: Already configured in `vercel.json` with rewrites. If issue persists:
1. Verify `vercel.json` is in project root
2. Check output directory is set to `dist`

### Environment Variables Not Working

**Solutions**:
1. Ensure variables are added in Vercel dashboard
2. Redeploy after adding variables
3. Verify variable names match your code

### Slow Build Times

**Solutions**:
1. Enable caching in Vercel settings
2. Check for large dependencies
3. Consider code splitting strategies

## Performance Optimization

### Enable Edge Functions (Optional)

For contact form serverless endpoint:
1. See [VERCEL.md](./VERCEL.md) for Edge Function setup
2. Create `api/contact.ts` in your repository
3. Deploy and test endpoint

### Enable Analytics

1. Go to your project on Vercel
2. Navigate to "Analytics" tab
3. Enable Vercel Analytics
4. No code changes required

## Manual Build Process (Alternative)

If you prefer to deploy without Git integration:

```bash
# Build locally
npm run build

# Install Vercel CLI
npm i -g vercel

# Deploy dist folder
cd dist
vercel --prod
```

## Monitoring and Updates

### Check Deployment Status
- View real-time logs in Vercel dashboard
- Monitor build times and errors
- Track deployment history

### Update Your Site
Simply push changes to your Git repository:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically rebuild and deploy.

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://vercel.com/docs/concepts/projects/domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## Support

For issues specific to:
- **Vercel Platform**: [Vercel Support](https://vercel.com/support)
- **This Portfolio**: Open an issue in your repository or contact meetnarola9@gmail.com

---

**Deployment Checklist:**
- [ ] Code pushed to Git repository
- [ ] Vercel account created
- [ ] Project imported and deployed
- [ ] Environment variables configured (if needed)
- [ ] Custom domain configured (optional)
- [ ] All pages tested and working
- [ ] Contact form tested
- [ ] Mobile responsiveness verified
