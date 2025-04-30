SHARE Space Website - Onboarding & Maintenance Guide

Welcome to the SHARE Space project! This guide will walk you through everything you need to know to maintain, update, and build on this website. It includes setup instructions, Firebase configuration, troubleshooting tips, and personal notes for the next interns.

What is SHARE Space?

SHARE Space (Stories, Hope, and Real Experiences) is a storytelling platform built for the Boston Medical Center's Autism Program. It allows individuals in the autism community to:

Submit heartfelt letters (publicly or anonymously)

Read approved letters categorized by identity (e.g., Parents, Siblings, Autistic individuals, Caregivers, Allies)

Experience accessibility features like "Read Aloud"

Manage letter approvals through a secure Admin Dashboard

Project Structure
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

Getting Started

1. Folder Structure

All major pages and styles are separated:

/index.html, /read.html, /submit.html, /login.html, /admin.html

CSS files in /css/ (e.g., parents.css, admin.css, global.css)

Firebase is used for both Authentication and Realtime Database

2. Setting Up Firebase

The site uses Firebase Hosting, Realtime Database, Authentication, and optionally Storage (if you decide to allow media uploads).

Firebase config is already embedded in each page. Here’s the rule setup:

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

3. Admin Access Setup

To give admin access to a user:

Go to your Firebase Realtime Database

Under the root, add a node admins

Add a UID (from the Firebase Auth panel) as a child key:

"admins": {
  "UID_FROM_AUTH_PANEL": true
}

Core Features & Pages

/read.html

Displays 5 categories as clickable cards

Each card opens a dedicated category page like parents.html, siblings.html, etc.

/submit.html

Users can submit a letter

Floating prompts guide users with sample ideas

Submitted letters go to Firebase but are hidden until approved

/login.html

Admins sign in with email/password

Redirects to admin.html on success

/admin.html

Admin dashboard

Toggle between Pending and Approved letters

Bulk approve/delete features

Session auto-timeout after 5 minutes of inactivity




