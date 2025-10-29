# 🏏 Cric Studio - Sports News & Updates

A beautiful, modern single-page website for sports news covering Cricket, Football, and Tennis. Built with pure HTML, CSS, and JavaScript - no frameworks required!

## ✨ Features

- **Single-Page Design**: Smooth scrolling navigation between sections
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradients, animations, and card-based design
- **Sports Coverage**: Dedicated sections for Cricket, Football, and Tennis
- **Fast Loading**: Optimized static website with no dependencies
- **Easy Deployment**: Ready to deploy on Vercel or Hostinger

## 🚀 Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser, or
3. Use a local server:

```bash
# Using npx (no installation needed)
npx serve .

# Or using Python
python -m http.server 8000

# Or using Node.js http-server
npx http-server
```

Visit `http://localhost:8000` (or the port shown) in your browser.

## 📦 Project Structure

```
cric-studio/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # Interactive features and animations
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata
└── README.md          # This file
```

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

Vercel offers free hosting with automatic HTTPS and CDN.

#### Method 1: Using Vercel CLI

1. Install Vercel CLI (one-time):
```bash
npm install -g vercel
```

2. Deploy from your project directory:
```bash
cd cric-studio
vercel
```

3. Follow the prompts:
   - Login/signup to Vercel
   - Confirm project settings
   - Your site will be live instantly!

#### Method 2: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New" → "Project"
3. Import your Git repository (GitHub/GitLab/Bitbucket)
   - Or click "Browse" to upload your project folder
4. Vercel will auto-detect the project settings
5. Click "Deploy"
6. Your site is live! 🎉

Your site will be available at: `https://your-project-name.vercel.app`

#### Custom Domain on Vercel

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed

---

### Deploy to Hostinger

Hostinger provides affordable shared hosting with cPanel.

#### Step 1: Prepare Your Files

Create a ZIP file containing:
- index.html
- styles.css
- script.js

Or use all files as-is.

#### Step 2: Upload to Hostinger

##### Using File Manager (Recommended):

1. Login to your Hostinger account
2. Go to "Hosting" → Select your hosting plan
3. Click "File Manager"
4. Navigate to `public_html` folder
5. Click "Upload" and select your files
   - Upload: `index.html`, `styles.css`, `script.js`
   - Or upload the ZIP and extract it
6. Ensure `index.html` is in the root of `public_html`

##### Using FTP:

1. Get your FTP credentials from Hostinger dashboard
2. Use an FTP client (FileZilla, WinSCP, etc.)
3. Connect to your hosting:
   - Host: Your domain or Hostinger FTP host
   - Username: Your FTP username
   - Password: Your FTP password
4. Upload files to `public_html` directory
5. Ensure `index.html` is in the root

#### Step 3: Access Your Site

Visit your domain: `http://yourdomain.com`

Your site should now be live!

#### Setting Up Custom Domain on Hostinger

1. If you purchased domain from Hostinger, it's automatic
2. If external domain:
   - Update nameservers to Hostinger's nameservers
   - Or update A record to point to Hostinger's IP
   - Wait 24-48 hours for DNS propagation

---

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;      /* Main purple-blue */
    --secondary-color: #764ba2;     /* Secondary purple */
    --text-dark: #2d3748;          /* Dark text */
    --text-light: #718096;         /* Light text */
}
```

### Adding More News

Add news cards in `index.html` within the respective section:

```html
<article class="news-card">
    <div class="news-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <span class="badge">Live</span>
    </div>
    <div class="news-content">
        <h3 class="news-title">Your News Title</h3>
        <p class="news-excerpt">Your news content here...</p>
        <div class="news-meta">
            <span class="date">2 hours ago</span>
            <span class="category">Category</span>
        </div>
    </div>
</article>
```

### Modifying Sections

Each section has an ID that you can modify:
- `#home` - Hero section
- `#cricket` - Cricket news
- `#football` - Football news
- `#tennis` - Tennis news
- `#about` - About section

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **No Build Process**: Pure HTML/CSS/JS
- **No Dependencies**: No npm packages needed
- **Static Site**: Can be hosted anywhere
- **SEO Friendly**: Semantic HTML structure
- **Performance**: Optimized with CSS animations and lazy loading

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Support

If you have any questions or issues with deployment, please refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Hostinger Help Center](https://support.hostinger.com)

---

## 🎯 Next Steps

After deployment, consider:
- Adding real news API integration
- Setting up a CMS for easy content updates
- Adding a newsletter signup form
- Implementing search functionality
- Adding more sports categories

---

Made with ❤️ for sports enthusiasts worldwide!


