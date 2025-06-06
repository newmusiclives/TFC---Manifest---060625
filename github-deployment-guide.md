# GitHub Deployment Verification Guide

## 1. Push Your Code to GitHub

Ensure your code is pushed to your GitHub repository:

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## 2. Set Up GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to "GitHub Pages" section
4. Under "Source", select the branch you want to deploy (usually "main")
5. Click "Save"

## 3. Configure for Vite

Since you're using Vite, you need to make sure your repository is configured correctly:

1. Ensure your `vite.config.ts` has the correct base path if you're not deploying to the root domain:

```typescript
// Only add this if you're not deploying to a custom domain
// If your repo is username.github.io/repo-name, use '/repo-name/'
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of your existing config
})
```

2. Create a `.github/workflows/deploy.yml` file to automate the build and deployment process:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

## 4. Verify Deployment

1. Go to the "Actions" tab in your GitHub repository
2. Check if the workflow has completed successfully
3. If successful, your site should be available at: `https://[username].github.io/[repository-name]/`

## 5. Test the Deployed Site

Before deploying to Vercel, thoroughly test your GitHub Pages deployment:

1. Check that all pages load correctly
2. Test all interactive elements
3. Verify that styles are applied properly
4. Test on different devices and browsers
5. Check that API calls to Supabase work correctly
6. Test user authentication flows

## 6. Common Issues and Solutions

- **404 errors**: Make sure your router is configured for GitHub Pages (which uses hash routing or needs a 404.html redirect)
- **Missing assets**: Verify that all asset paths are relative and working
- **API issues**: Check that your Supabase environment variables are properly set
- **Blank page**: Look at browser console for errors, often related to routing issues

## 7. Once Verified, Deploy to Vercel

After confirming your GitHub Pages deployment works correctly:

1. Connect your GitHub repository to Vercel
2. Configure your build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. Set up your environment variables in Vercel dashboard
4. Deploy your application

Vercel will provide a preview URL for your deployment that you can use for final verification before assigning a custom domain.
