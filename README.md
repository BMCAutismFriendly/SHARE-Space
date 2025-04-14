# SHARE Space: Stories, Hope, and Real Experiences

**Autism Program**

Welcome to the GitHub repository for **SHARE Space**, a digital storytelling platform created by the Autism Program at Boston Medical Center (BMC). This project was built to support patients, caregivers, autistic individuals, and allies by showcasing powerful, anonymous(or not) letters of encouragement, love, and hope.

---

## 🌐 Live Site
Access the project live here: [https://bmcautismfriendly.github.io/SHARE-Space/]

---

## 📁 Project Structure

```
├── index.html                # Main HTML page
├── style.css                 # All site styles
├── script.js                 # JavaScript for interactivity
├── images/                   # Contains all images used (logo, envelope icons)
│   └── envelope-icon.png
│   └── autism-logo.JPG
│   └── bmc-logo.png
├── letters/                  # Optional folder for storing text copies or templates of letters
```

---

## 💡 Project Purpose
SHARE Space (Stories, Hope, and Real Experiences) is a welcoming digital platform designed to:
- Collect and share heartfelt letters from members of the autism community
- Encourage individuals who are facing difficult moments
- Provide a safe, uplifting space for expression
- Showcase anonymous submissions from caregivers, siblings, autistic individuals, and allies

---

## 🛠️ How to Edit, Update, or Maintain This Project

### 🔁 General Instructions
1. **Clone or download the repository** to your local machine.
2. Open the files in a code editor like VS Code.
3. Make changes to the relevant HTML, CSS, or JS files.
4. Push updates to GitHub.

### ✍️ Updating Letters
- Navigate to the `index.html` file.
- Locate the `#letters-section`.
- Add or update envelope cards like this:
```html
<div class="envelope-grid" data-category="parents">
  <div class="envelope-card" onclick="openModal('letter1')">
    <img src="images/envelope-icon.png" alt="Letter from a Parent" />
  </div>
</div>
```
- Update the modal content in `script.js` accordingly:
```js
const letterContent = {
  letter1: {
    title: "To My Child",
    author: "A Loving Parent",
    body: "You are stronger than you know..."
  },
  // Add more as needed
};
```

### 🔍 Filtering by Category
- You can categorize letters using `data-category`:
  - `parents`
  - `siblings`
  - `autistic`
  - `strangers`
- Make sure the dropdown filter in HTML includes the same categories.

### 🖼️ Adding Images
1. Upload new images to the `/images/` folder.
2. Update `src="images/your-image.png"` in HTML.

### 🧾 Editing the Welcome Message
- Go to `index.html`
- Locate the section with `id="welcome-section"`
- Edit the text inside the `.intro-box`

### 📩 Submit a Letter Section
- This section supports two options:
  - **Option A:** Write directly on the page
  - **Option B:** Use a REDCap form (optional)
- To activate REDCap, replace the `href="#"` link with the actual REDCap URL.

---

## 💻 Hosting on GitHub Pages

To deploy or update the site:
1. Go to the repository’s **Settings > Pages**.
2. Under **Source**, choose the `main` branch and `/ (root)` folder.
3. Click **Save**.
4. After a few moments, a link will appear that looks like: https://bmcautismfriendly.github.io/SHARE-Space/
   ```
   https://bmcautismfriendly.github.io/SHARE-Space/
   
```

You can now share this link!

---

## 📝 Editing Content Live on GitHub
To edit files directly from GitHub:
1. Go to the file (e.g., `index.html`)
2. Click the ✏️ (pencil) icon to edit
3. Commit changes with a helpful message

To add folders like `images/` or `letters/`:
1. Click **Add file > Create new file**
2. Name the file like `images/placeholder.txt`
3. This creates the folder — you can now upload images via drag-and-drop into it

---

## ✅ Accessibility & Best Practices
- All images have `alt` text for screen readers
- The modal is accessible with `aria` tags and keyboard navigation
- The layout is responsive on both mobile and desktop

---

## 🙏 A Note for Future Interns
Thank you for continuing this project. Please:
- Keep submissions anonymous/ not (confirm with supervisor)
- Honor/respect the stories shared
- Make small design updates with care and test before pushing

Feel free to reach out to the Autism Program at BMC for guidance, or continue building this platform with love and inclusivity.

---

## 📄 License
This project is developed for internal educational and outreach use. Contact the BMC Autism Program for reuse permissions.
