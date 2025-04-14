# SHARE Space 🌈  
**Stories, Hope, and Real Experiences**  
A digital storytelling platform from the Autism Program at Boston Medical Center (BMC) — collecting heartfelt letters from Parents, caregivers, siblings, autistic individuals, and allies.

---

## 📁 Project Overview  
**SHARE Space** is designed to offer hope, encouragement, and community through the power of shared letters. Visitors can read from a growing collection or submit their own letter directly through the site or a REDCap form.

**Built with:**
- HTML, CSS, JavaScript
- GitHub Pages (hosted)

---

## 🔗 Live Website  
👉 [Click here to view the SHARE Space website](https://bmcautismfriendly.github.io/SHARE-Space/)  

---

## ✏️ How to Add or Update Letters

### 🔄 To Update an Existing Letter:
1. Open the `script.js` file.
2. Find the `openModal()` function.
3. You’ll see a block like this:
```js
const text = {
  letter1: "Dear friend, you are not alone...",
  letter2: "To my child...",
  ...
};
Update the content inside the quotes for any letter key (letter1, letter2, etc.).

🆕 To Add a New Letter:
In index.html, scroll to the Read Letters Section.

Find the correct letter category grid:

html
Copy
Edit
<div class="envelope-grid" data-category="parents">
  <!-- Letter cards go here -->
</div>
Inside that div, add a new letter envelope like this:

html
Copy
Edit
<div class="envelope-card" onclick="openModal('letter6')">
  <img src="images/envelope-icon.png" alt="Letter from a Parent" />
</div>
Then go to script.js and add the content:

js
Copy
Edit
letter6: "This is your new letter content."
📂 How to Organize Letters by Category
Letters are grouped using the data-category attribute:

parents

siblings

autistic

strangers

Each group looks like:

html
Copy
Edit
<div class="envelope-grid" data-category="siblings">
  <div class="envelope-card" onclick="openModal('letter2')">
    <img src="images/envelope-icon.png" alt="Letter from a Sibling" />
  </div>
</div>
These are filtered with the dropdown menu at the top of the Read Letters section.

💌 Submit a Letter
Option A: Direct Form
Users can submit a letter directly on the page. The form fields include:

Name (optional)

Email (optional)

Title of the Letter

Letter content

Consent checkbox

Submissions trigger a JavaScript confirmation message.

Option B: REDCap Form
To use a REDCap form instead:

Locate this section in the HTML:

html
Copy
Edit
<a href="#" class="redcap-button" target="_blank">Go to REDCap Form</a>
Replace the href="#" with your actual REDCap survey link.

🖼️ How to Add or Change Images
To Add:
Navigate to the /images folder in your GitHub repository.

Click Add file > Upload files.

Upload the new image.

To Use in HTML:
Update the image src path:

html
Copy
Edit
<img src="images/your-new-image.png" alt="Your description here" />
🛠️ How to Edit the Website
To Edit Locally:
Clone the repo to your desktop.

Open index.html with VS Code or any text editor.

Edit, save, and preview changes in your browser.

To Push Live:
Commit changes via GitHub Desktop or CLI.

Push to main branch.

Visit the GitHub Pages site — changes are instantly live.

🧠 Tips for Future Interns
If you’re new to HTML/CSS/JS, don’t worry — the structure is intuitive.

When adding letters, be consistent with naming (e.g., letter6, letter7, etc.)

Always test your updates locally before pushing to GitHub.

If using REDCap, coordinate with the Autism Program supervisor to update the form link.

