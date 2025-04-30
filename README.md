# SHARE Space Website – Onboarding & Maintenance Guide

Welcome to the SHARE Space project! This guide will help you understand how to maintain, update, and build on this website. Whether you're fixing a bug or adding a feature, everything you need to know is right here.

---

## What is SHARE Space?

SHARE Space stands for **Stories, Hope, and Real Experiences** — a digital storytelling platform created for the Autism Program at Boston Medical Center.

It allows individuals in the autism community to:

- 📨 Submit heartfelt letters (anonymously or with names)  
- 📚 Read categorized and approved letters (Parents, Siblings, Autistic Individuals, Caregivers, Allies)  
- 🧠 Access accessibility features like **"Read Aloud"**  
- 🔐 Manage content through a secure **Admin Dashboard**

---

## Getting Started

### 1 Folder Structure Overview

```
SHARE-SPACE/
├── index.html
├── read.html
├── submit.html
├── login.html
├── admin.html
├── parents.html
├── siblings.html
├── autistic.html
├── caregivers.html
├── allies.html
│
├── css/
│   ├── global.css
│   ├── header.css
│   ├── footer.css
│   ├── tabs.css
│   ├── login.css
│   ├── admin.css
│   ├── read.css
│   ├── submit.css
│   ├── parents.css
│   ├── siblings.css
│   ├── autistic.css
│   ├── caregivers.css
│   └── strangers.css
│
├── images/
│   ├── autismlogo.png
│   ├── envelope-icon.png
│   ├── himg1.png
│   ├── himg3.png
│   └── (uploaded letter images)
│
├── scripts/
│   └── (optional: external JS if refactored)
│
└── firebase/
    └── firebaseConfig.js (or inline in HTML)
```

---

### 2 Firebase Setup

SHARE Space uses:

- 🔐 **Firebase Authentication**  
- 📂 **Firebase Realtime Database**  
- 🔒 **Firebase Rules**

#### 📜 Firebase Rules

Paste this into your Firebase Realtime Database "Rules" tab:

```json
{
  "rules": {
    "letters": {
      "$category": {
        ".read": "true",
        "$letterId": {
          ".read": "data.child('approved').val() === true || root.child('admins').child(auth.uid).exists()",
          ".write": "!data.exists() || root.child('admins').child(auth.uid).exists()"
        }
      }
    },
    ".read": "root.child('admins').child(auth.uid).exists()",
    ".write": "root.child('admins').child(auth.uid).exists()"
  }
}
```

---

### Giving Admin Access

Add a new admin UID to your Firebase Database like this:

```json
"admins": {
  "FIREBASE_AUTH_UID": true
}
```

>  You can find the UID under the Firebase Authentication panel after creating a new user.

---

##  Key Features & Pages

### `/read.html`

- Displays 5 identity-based categories as clickable cards  
- Leads to pages like `parents.html`, `siblings.html`, etc.

### `/submit.html`

- Users submit a letter with category, name (optional), and consent  
- Floating prompts offer encouragement  
- Submissions are hidden until approved

### `/login.html`

- Admins sign in using email/password  
- Redirects to admin dashboard upon success

### `/admin.html`

- Admin-only dashboard protected with Firebase auth  
- Toggle between `Pending` and `Approved` letters  
- Bulk approve/delete with checkboxes  
- Auto-logout after 5 minutes of inactivity

---

##  Troubleshooting Guide

| Problem                 | Solution                                                                 |
|-------------------------|--------------------------------------------------------------------------|
| Modal not opening       | Ensure modal HTML exists and `showLetterModal()` is properly defined     |
| Letters not displaying  | Check Firebase rules and confirm `approved: true` exists                 |
| Admin login not working | Check Firebase config and ensure credentials are valid in Auth panel     |
| Blank admin dashboard   | Ensure the user's UID is listed under the `admins` node in the database  |

---

## 🤎 Notes for Future Interns

###  Hey there,

Thank you for stepping in to continue this meaningful work. Here are some helpful tips to guide your journey with clarity and care.

####  What To Do

- Test changes on a local/dev copy before updating production  
- Keep tone and design gentle, accessible, and welcoming  
- Only approve respectful, thoughtful letters  
- Use the floating prompts to guide users  
- Take pride in small improvements — they matter  

####  What Not To Do

- Don’t change Firebase rules unless you're confident in what you're doing  
- Don’t rename or delete categories without full team discussion  
- Don’t push changes without notifying others on the team  

---

##  Useful Link

- [Firebase Console](https://console.firebase.google.com/)    

---

##  Future Wishlist

- Allow users to upload images with their letters  
- Add an analytics dashboard (e.g., most read letters, submission volume by category)  
- Build multi-language support  
- Improve mobile UI responsiveness  
- Enhance Read Aloud (voice options, speed controls)

---

_If all fails and you need help with anything, please reach out to me - obidelek19@gmail.com._

