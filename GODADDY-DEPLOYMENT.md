# 🚀 Deploying Cric Studio to GoDaddy (Root Domain)

This guide explains how to deploy your static site so it loads directly at `https://cricstudio.in` (no subdirectory), and optionally how to make `https://cricstudio.in/signup/` serve the same page.

## 📁 Recommended File Structure

```
public_html/
└── cricstudio.in/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── .htaccess   (optional rules below)
```

If your hosting maps `cricstudio.in` directly to `public_html/`, then place the files in `public_html/` instead of `public_html/cricstudio.in/`.

## 🔧 Deploy via File Manager (Recommended)

1) Login to GoDaddy → My Products → Web Hosting → Manage → File Manager  
2) Open the site’s document root (e.g. `public_html/cricstudio.in/`)  
3) Remove any old files you no longer need (e.g. previous WordPress files, old redirects)  
4) Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
5) Ensure permissions: folders 0755, files 0644  
6) Visit `https://cricstudio.in` in an incognito window

## ✅ Correct Asset Paths
In `index.html`, use root-relative paths so CSS/JS load from the root reliably:

```html
<!-- in <head> -->
<link rel="stylesheet" href="/styles.css">

<!-- before </body> -->
<script src="/script.js" defer></script>
```

## 🧩 Optional: Serve the Same Page at /signup Without Redirect
If you want `https://cricstudio.in` and `https://cricstudio.in/signup/` to show the same page without changing the URL, place this `.htaccess` in the site root (e.g. `public_html/cricstudio.in/.htaccess`):

```apache
RewriteEngine On

# Optional: force HTTPS
# RewriteCond %{HTTPS} off
# RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Serve the homepage for / (internal rewrite, URL stays as /)
RewriteRule ^$ index.html [L]

# If you want /signup to show the same page (URL stays /signup/)
RewriteRule ^signup/?$ index.html [L]

# Default index
DirectoryIndex index.html

# Optional SPA-style 404 handler (comment out if not needed)
# ErrorDocument 404 /index.html
```

## 🧹 Remove Old Redirects
If you previously used a subdirectory approach (e.g. `/the100.co.in/`), remove any redirects pointing to that path from `.htaccess`, and delete any old `redirect-index.html` used for that setup.

## 🔍 Troubleshooting

### “Only HTML loads, no CSS/JS”
- Open `https://cricstudio.in/styles.css` and `https://cricstudio.in/script.js` directly to confirm they load
- Ensure `<link href="/styles.css">` and `<script src="/script.js">` in `index.html`
- Clear browser cache (Ctrl+Shift+R) or test incognito

### “404 Not Found” at root
- Confirm `index.html` exists in the site’s document root
- Remove legacy redirects from `.htaccess`
- Ensure `DirectoryIndex index.html` is set (see above)

### Permissions
- Directories 0755, files 0644

## 📞 Need Help?

- **GoDaddy Support:** 1-480-505-8877  
- **Live Chat:** Available in your GoDaddy account  
- **Documentation:** https://www.godaddy.com/help

---

**All set! Your site will now load at `https://cricstudio.in` with clean, root-level paths. 🏏⚽🎾**

