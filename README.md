# DevDeakin Q&A Platform – With Premium Features

This is a full-stack Q&A platform built with **React**, **Firebase**, and **Stripe**. It allows users to sign up, log in, post questions or articles with code and Markdown, upload images, browse/search questions, and upgrade to a premium plan with Stripe integration.

---

## Overview
Originally developed as a university project, this application has been enhanced to demonstrate real-world features such as secure authentication, serverless data handling, and an integrated payment system for premium functionality.

---

## Key Features
- **User Authentication:** Secure login and registration using Firebase Authentication.
- **Post Questions and Articles:** Create posts with tags, Markdown, and code snippets using CodeMirror.
- **Image Uploads:** Store images in Firebase Storage for questions and articles.
- **Search and Filter:** Find questions by title, tags, or date.
- **Subscription Plans:** Dedicated page for Free and Premium plans.
- **Stripe Payment Integration:** Secure checkout flow for premium upgrade (test mode).
- **Responsive UI:** Built with Semantic UI React for a polished experience.

---

## Tech Stack
- **Frontend:** React, React Router, Semantic UI React
- **Backend/Serverless:** Firebase (Auth, Firestore, Storage)
- **Payments:** Stripe (React Stripe.js, server.js backend integration)
- **Other:** CodeMirror, React-Markdown, dotenv

---

## Screenshots
*(Add your screenshots in a `/screenshots` folder and reference them here)*

Example:
![Homepage](screenshots/home.png)
![Post Question](screenshots/post.png)
![Plans](screenshots/plans.png)
![Stripe Payment](screenshots/payment.png)

---

## Installation and Setup
To run this project locally:

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env file in the root directory and add:
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# 4. Start the development server
npm start

## Project Structure

project-root/
│
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page components (Home, Plans, Payment, etc.)
│   ├── firebaseConfig.js    # Firebase setup
│   └── App.js
│
├── screenshots/             # Images for README
├── .env.example             # Example environment variables
├── server.js                # Stripe backend for payment integration
├── README.md
├── package.json
└── package-lock.json

