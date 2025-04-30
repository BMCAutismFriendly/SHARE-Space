📄 SHARE Space Website – Onboarding & Maintenance Guide

Welcome to the SHARE Space project! This guide will help you understand how to maintain, update, and build on this website. Whether you're fixing a bug or adding a feature, everything you need to know is right here.

🌟 What is SHARE Space?

SHARE Space stands for Stories, Hope, and Real Experiences — a digital storytelling platform for the Autism Program at Boston Medical Center. This website enables the autism community to:

📬 Submit heartfelt letters (anonymously or with names)

📖 Read categorized and approved letters (Parents, Siblings, Autistic Individuals, Caregivers, Allies)

🧠 Access accessibility features like "Read Aloud"

🔐 Manage content through a secure Admin Dashboard

🚀 Getting Started

1️⃣ Folder Structure Overview

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
│   └── himg3.png
│
├── scripts/
│   └── (optional external JS if refactored)
│
└── firebase/
    └── firebaseConfig.js (currently inline in HTML)

2️⃣ Firebase Setup

SHARE Space uses:

🔐 Firebase Authentication

💾 Firebase Realtime Database

🌐 Firebase Hosting

🔐 Firebase Rules

Paste these into your Realtime Database Rules tab:

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

👤 Give Admin Access

Add admin UID to your database like this:

"admins": {
  "FIREBASE_AUTH_UID": true
}

🔧 Key Features & Pages

/read.html

Displays 5 identity-based categories as clickable cards

Leads to pages like parents.html, siblings.html, etc.

/submit.html

Users submit a letter with category, name, and consent

Floating prompts provide writing inspiration

Submissions are hidden until admin approval

/login.html

Admins sign in using email/password

Redirects to admin dashboard upon success

/admin.html

Admin-only dashboard with Firebase auth protection

Toggle between Pending and Approved letters

Bulk approve/delete with checkboxes

Auto-logout after 5 minutes of inactivity

⚡ Troubleshooting Guide

Problem

Solution

Modal not opening

Ensure modal HTML exists & JS functions showLetterModal() are correct

Letters not displaying

Verify .read rule + approved value in Firebase

Admin login not working

Check Firebase config and Auth panel

Admin sees blank dashboard

Ensure UID is added under admins node

🧱 Notes for Future Interns

Hey there 👋

Thank you for stepping in to continue this meaningful work. Here’s a few tips I hope help you navigate things with clarity and confidence:

✅ What To Do

Test changes on a local/dev copy first

Keep tone and visual design soft, inclusive, and welcoming

Only approve respectful, thoughtful letters

Use the floating prompts for user encouragement

Take pride in small improvements — they matter!

❌ What Not To Do

Don’t touch Firebase rules unless absolutely sure

Don’t delete categories or rename Firebase nodes without team approval

Don’t bypass letter review before approval

💌 A Note from Kehinde

This space is more than HTML and CSS — it’s a home for feelings and stories that matter. You’re making someone feel seen. That’s not just work. That’s purpose.

You belong here. Keep going.

With love,Kehinde 🌟

🔗 Quick Resources

Firebase Console

BMC Autism Program

Transparent Background Textures

🎯 Wishlist (Future Improvements)

📸 Allow image uploads with each letter

📊 Build simple analytics for admins (most viewed, new letters per week)

🌍 Enable multi-language support

📱 Optimize for mobile-first experiences

🗣️ Improve text-to-speech (e.g., voice options, read speed)

✨ Example Firebase Letter Entry (For Reference)

"letters": {
  "parents": {
    "xyz123abc": {
      "name": "Ada",
      "title": "To My Son",
      "letter": "You are everything to me...",
      "date": "2025-04-30",
      "category": "parents",
      "approved": false
    }
  }
}

If you ever feel stuck — don’t panic. Review your code. Check Firebase. Ask for help. You’ve got this 💪






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
    └── (Firebase config is inline in HTML or can be extracted)
