# SkillChamp 2026 Graduate Section 

https://skillchampgraduate.netlify.app/

Static competition website for the `SkillChamp 2026 Graduate Section` in Bangladesh.

This site is built as a simple hard-coded static website so it can be uploaded to GitHub and deployed easily on static hosting platforms like:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

## Project Structure

Main pages:

- `index.html` - Home page
- `competition.html` - Competition format and rules
- `leaderboard.html` - Public leaderboard
- `announcements.html` - Announcements
- `contact.html` - Contact page
- `privacy.html` - Privacy Policy
- `terms.html` - Terms & Conditions

Shared files:

- `assets/css/custom.css` - Main styling and responsive rules
- `assets/js/main.js` - Shared site config like emails, registration link, LinkedIn
- `assets/js/include.js` - Shared navbar and footer template
- `assets/js/leaderboard.js` - Leaderboard logic

Assets:

- `assets/images/` - Logos and images
- `assets/Kit/` - Competition kit files

## Important Config

The main shared config is here:

- `assets/js/main.js`

Current config block:

```js
window.skillChampConfig = {
  registrationUrl: "#",
  leaderboardSheetUrl: "YOUR_SHEET_URL",
  supportEmail: "connectiya@gmail.com",
  alternateEmail: "biz.dev@connectiya.com",
  developerName: "Tawfiq Hassan Nayem",
  developerLinkedIn: "https://www.linkedin.com/in/tawfiqhassannayem/",
  leaderboardSheetNames: ["Sheet2", "SCOREBOARD", "Scoreboard", "Leaderboard"],
  leaderboardFallback: [],
};
```

## How To Change Important Things

### 1. Add registration Google Form link

Open:

- `assets/js/main.js`

Find:

```js
registrationUrl: "#",
```

Replace `"#"` with your Google Form link.

That will update all `Register Team` buttons automatically.

### 2. Change support emails

Open:

- `assets/js/main.js`

Update:

```js
supportEmail: "connectiya@gmail.com",
alternateEmail: "biz.dev@connectiya.com",
```

### 3. Change footer, navbar, shared links

Open:

- `assets/js/include.js`

This file controls the shared navbar and footer shown across all pages.

### 4. Change colors, spacing, responsiveness

Open:

- `assets/css/custom.css`

This is the main stylesheet for:

- colors
- spacing
- buttons
- cards
- footer
- responsive layout

### 5. Change page content

Edit these files directly:

- Home page: `index.html`
- Competition page: `competition.html`
- Announcements: `announcements.html`
- Contact page: `contact.html`
- Privacy page: `privacy.html`
- Terms page: `terms.html`

### 6. Update leaderboard source

Open:

- `assets/js/main.js`

Update:

```js
leaderboardSheetUrl: "...",
leaderboardSheetNames: ["Sheet2", "SCOREBOARD", "Scoreboard", "Leaderboard"],
```

If your Google Sheet tab name is different, change `leaderboardSheetNames`.

## Local Preview

This is a static site, so you can preview it in any of these ways:

### Option 1

Open `index.html` directly in the browser.

### Option 2

Use a simple local server for better browser behavior:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Upload

### Step 1

Create a new GitHub repository.

### Step 2

Upload all project files to the root of the repository.

Make sure these files stay in root:

- `index.html`
- `competition.html`
- `leaderboard.html`
- `announcements.html`
- `contact.html`
- `privacy.html`
- `terms.html`

### Step 3

Commit and push.

## GitHub Pages Deploy

### Option A: Deploy from root

1. Go to repository `Settings`
2. Open `Pages`
3. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Save

GitHub will generate a live link.

## Netlify Deploy

1. Upload the whole project folder
2. No build command needed
3. Publish directory: leave blank or use root

## Vercel Deploy

1. Import the GitHub repository
2. Framework preset: `Other`
3. No build command needed
4. Output directory: root

## Before Deploy

Checklist:

- Add registration Google Form link in `assets/js/main.js`
- Double-check support emails
- Double-check leaderboard Google Sheet access
- Confirm Google Sheet is publicly viewable if live leaderboard is needed
- Test desktop and mobile once after deploy

## Notes

- This is a static public-facing site.
- The public leaderboard is designed to show limited team-level information only.
- Admin-only Google Sheet links should not be shown publicly.

## Credits

Design & Developed by:

- `Tawfiq Hassan Nayem`
- LinkedIn: `https://www.linkedin.com/in/tawfiqhassannayem/`
# SkillChamp
