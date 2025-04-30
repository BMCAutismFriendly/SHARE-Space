# 📄 SHARE Space Website – Onboarding & Maintenance Guide

Welcome to the SHARE Space project! This guide will help you understand how to maintain, update, and build on this website. Whether you're fixing a bug or adding a feature, everything you need to know is right here.

---

## 🌟 What is SHARE Space?

SHARE Space stands for **Stories, Hope, and Real Experiences** — a digital storytelling platform created for the Autism Program at Boston Medical Center.

It allows individuals in the autism community to:

- 📬 Submit heartfelt letters (anonymously or with names)
- 🗂️ Read categorized and approved letters (Parents, Siblings, Autistic Individuals, Caregivers, Allies)
- 🧠 Access accessibility features like **"Read Aloud"**
- 🔐 Manage content through a secure **Admin Dashboard**

---

## 🚀 Getting Started

### 1️⃣ Folder Structure Overview






---

### 2️⃣ Firebase Setup

SHARE Space uses:

- 🔐 Firebase Authentication  
- 📂 Firebase Realtime Database  
- 🌍 Firebase Hosting  
- 🔒 Firebase Rules

#### 🔧 Firebase Rules

Paste this into your Realtime Database "Rules" tab:

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

SHARE-SPACE/ ├── index.html ├── read.html ├── submit.html ├── login.html ├── admin.html ├── parents.html ├── siblings.html ├── autistic.html ├── caregivers.html ├── allies.html │ ├── css/ │ ├── global.css │ ├── header.css │ ├── footer.css │ ├── tabs.css │ ├── login.css │ ├── admin.css │ ├── read.css │ ├── submit.css │ ├── parents.css │ ├── siblings.css │ ├── autistic.css │ ├── caregivers.css │ └── strangers.css │ ├── images/ │ ├── autismlogo.png │ ├── envelope-icon.png │ ├── himg1.png │ ├── himg3.png │ └── (uploaded letter images) │ ├── scripts/ │ └── (optional: external JS if refactored) │ └── firebase/ └── firebaseConfig.js (or inline in HTML)
