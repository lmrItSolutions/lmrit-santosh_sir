# 🚀 Deploying Cric Studio to GoDaddy with Subdirectory

This guide will help you deploy your website so it appears at `https://cricstudio.in/the100.co.in/`

## 📁 File Structure on GoDaddy

Your GoDaddy hosting should look like this:

```
public_html/
├── .htaccess (redirect file)
├── the100.co.in/
    ├── index.html
    ├── styles.css
    ├── script.js
```

## 🔧 Deployment Steps

### Method 1: Using File Manager (Recommended)

#### Step 1: Access GoDaddy File Manager

1. Login to [GoDaddy.com](https://www.godaddy.com)
2. Go to **My Products**
3. Find your **Web Hosting** for `cricstudio.in`
4. Click **Manage** or **cPanel**
5. Open **File Manager**

#### Step 2: Navigate to public_html

1. Open the `public_html` folder (this is your website root)
2. Delete any default files (like `index.html`, `coming-soon.html`)

#### Step 3: Create Subdirectory

1. Click **+ New Folder** button
2. Name it: `the100.co.in`
3. Open this new folder

#### Step 4: Upload Website Files

1. Inside the `the100.co.in` folder, click **Upload**
2. Upload these 3 files:
   - `index.html`
   - `styles.css`
   - `script.js`

#### Step 5: Add Redirect (Choose One Option)

**Option A: Using .htaccess (Recommended)**

1. Go back to the `public_html` folder (root)
2. Upload the `.htaccess` file from your project
3. This will automatically redirect `cricstudio.in` → `cricstudio.in/the100.co.in/`

**Option B: Using redirect-index.html**

1. Go back to the `public_html` folder (root)
2. Rename `redirect-index.html` to `index.html`
3. Upload it to the root of `public_html`

#### Step 6: Test Your Website

1. Visit `https://cricstudio.in` - should redirect to
2. `https://cricstudio.in/the100.co.in/` - your website loads!

---

### Method 2: Using FTP

#### Step 1: Get FTP Credentials

1. In GoDaddy cPanel, find **FTP Accounts**
2. Note your:
   - **FTP Host:** Usually `ftp.cricstudio.in` or `cricstudio.in`
   - **Username:** Your FTP username
   - **Password:** Your FTP password

#### Step 2: Connect with FTP Client

1. Download [FileZilla](https://filezilla-project.org/) (free FTP client)
2. Open FileZilla and enter:
   - **Host:** ftp.cricstudio.in
   - **Username:** [your FTP username]
   - **Password:** [your FTP password]
   - **Port:** 21
3. Click **Quickconnect**

#### Step 3: Create Folder Structure

1. Navigate to `public_html` folder (right panel)
2. Right-click → **Create directory** → Name: `the100.co.in`
3. Enter the `the100.co.in` folder

#### Step 4: Upload Files

1. On the left panel (your computer), navigate to your project folder
2. Select `index.html`, `styles.css`, `script.js`
3. Drag and drop them into the `the100.co.in` folder (right panel)

#### Step 5: Upload Redirect File

1. Go back to `public_html` root
2. Upload `.htaccess` file

#### Step 6: Test

Visit `https://cricstudio.in` to see your website!

---

## 🔍 Verification Checklist

- [ ] Folder `the100.co.in` exists in `public_html`
- [ ] `index.html`, `styles.css`, `script.js` are inside `the100.co.in` folder
- [ ] `.htaccess` is in the root of `public_html`
- [ ] Visiting `cricstudio.in` redirects to `cricstudio.in/the100.co.in/`
- [ ] Website loads properly with all styles and images

---

## ❓ Why This Structure?

When someone visits `cricstudio.in`:
1. The `.htaccess` file intercepts the request
2. Automatically redirects to `/the100.co.in/`
3. Browser URL shows: `https://cricstudio.in/the100.co.in/`
4. Your website loads from that location

---

## 🔧 Troubleshooting

### Website shows "404 Not Found"
- Check that files are in the correct folder
- Ensure `index.html` is named exactly that (lowercase)

### Redirect not working
- Make sure `.htaccess` is in the root `public_html` folder
- Check if `.htaccess` files are hidden (show hidden files in File Manager)
- Contact GoDaddy support to ensure mod_rewrite is enabled

### CSS/JS not loading
- Check file paths in `index.html`
- Ensure all files are in the same `the100.co.in` folder
- Clear browser cache

---

## 🌐 Alternative: Direct Domain Setup

If you want the website at just `cricstudio.in` (without subdirectory):

1. Upload `index.html`, `styles.css`, `script.js` directly to `public_html` root
2. Don't create the subdirectory
3. Don't use `.htaccess` redirect

This is simpler but won't have the `/the100.co.in/` in the URL.

---

## 📞 Need Help?

- **GoDaddy Support:** 1-480-505-8877
- **Live Chat:** Available in your GoDaddy account
- **Documentation:** https://www.godaddy.com/help

---

**Good luck with your deployment! 🏏⚽🎾**

