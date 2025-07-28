# DevDeakin Q&A Platform – With Premium Features

A full-stack Q&A platform built using **React**, **Firebase**, and **Stripe**. It allows users to sign up, log in, create posts with Markdown and code snippets, upload images, browse/search questions, and upgrade to a premium plan using Stripe payment integration.

---

## Overview
This application was initially developed as part of an academic project and later enhanced to showcase full-stack, real-world functionality. It integrates **secure authentication**, **cloud-based data storage**, **subscription-based payments**, and **email marketing automation** to deliver a functional, scalable, and user-friendly Q&A platform. Users can log in, create rich Markdown-based posts, upgrade to premium plans via Stripe, and subscribe to a developer newsletter powered by SendGrid.

---

## Key Features
- **User Authentication:** Login and registration with Firebase Authentication.
- **Create Posts:** Add questions or tutorials with Markdown support and code syntax highlighting using CodeMirror.
- **Image Uploads:** Attach images to posts using Firebase Storage.
- **Search & Filter:** Browse questions by title, tags, or date.
- **Subscription Plans:** Dedicated page for Free and Premium plans.
- **Stripe Integration:** Secure checkout for upgrading to premium (test mode).
- **Newsletter Subscription:** Users can subscribe to updates via email using SendGrid API. Subscribed users receive a welcome email and are added to a managed contact list.
- **Responsive UI:** Designed with Semantic UI React for a clean, user-friendly interface.

---

## Tech Stack
- **Frontend:** React, React Router, Semantic UI React
- **Backend / Serverless:** Firebase (Auth, Firestore, Storage)
- **Payments:** Stripe (React Stripe.js + Express server)
- **Additional Libraries:** CodeMirror, React-Markdown, dotenv

---

## Screenshots

### Homepage
<img src="https://github.com/user-attachments/assets/2d4ac92e-fe26-40b3-8b8c-efe99ba447c8" width="600" />

### Post Question Page
<img src="https://github.com/user-attachments/assets/45230cdf-8b13-4cbc-8a80-717fd4251ce2" width="600" />

### Find Question Page
<img src="https://github.com/user-attachments/assets/713565de-3b90-4f34-80fb-de1c3aec59d3" width="600" />

### Subscription Plan Page
<img src="https://github.com/user-attachments/assets/e22c5d47-1318-4b54-83cc-6e4b646b2388" width="600" />

### Payment Page
<img src="https://github.com/user-attachments/assets/bdd6c957-04a6-45fd-a167-1494f002f451" width="600" />

---

## 📽️ Demo Video

Watch a quick walkthrough of the DevDeakin Q&A Platform features:

[![Watch the demo](https://img.youtube.com/vi/AcIcTJSyZPg/0.jpg)](https://youtu.be/AcIcTJSyZPg)

> _Click the thumbnail above to open the video on YouTube._
---

## Installation and Setup

To run this project locally:

```bash
# 1. Clone the repository
git clone https://github.com/TanvirRahmanTaiyeb/devdeakin-qa-platform.git
cd devdeakin-qa-platform

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env file in the root directory and add the following:

# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_PROJECT_ID=your_project_id

# Stripe Configuration
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# SendGrid Configuration (used in server.js)
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_CONTACT_LIST_ID=your_sendgrid_contact_list_id

# 4. Start the development server
npm start

```

## Project Structure
The project is organized as follows:

```plaintext
project-root/
│
├── public/                      # Public assets
├── src/
│   ├── components/              # UI components
│   │   ├── Header.js            # Navigation bar
│   │   ├── Footer.js            # Footer section
│   │   ├── HeroImage.js         # Homepage banner
│   │   ├── Login.js             # User login
│   │   ├── Register.js          # User registration
│   │   ├── PostPage.js          # Create new question/article
│   │   ├── FindQuestion.js      # Browse and search questions
│   │   ├── PlansPage.js         # Subscription plans
│   │   ├── CheckoutForm.js      # Stripe payment form
│   │   ├── ArticleCard.js       # Displays articles
│   │   ├── TutorialCard.js      # Displays tutorials
│   │   └── ...CSS files for styling
│   ├── firebaseConfig.js        # Firebase initialization
│   ├── App.js                   # Main app component
│
├── server.js                    # Express server for Stripe integration
├── .env.example                 # Example environment variables
├── README.md
├── package.json
└── package-lock.json

```

## Why This Project is Valuable
- Demonstrates full-stack development skills using modern technologies.
- Covers authentication, payment integration, and real-time data handling.
- Implements secure, scalable architecture using serverless services.
- Highlights ability to create a responsive and user-friendly interface.

---

## Disclaimer
This project was originally developed as part of an academic learning exercise and later enhanced for demonstration purposes.  
It is not intended for production use. All API keys and payment integrations (Stripe) are in **test mode only**.  
Please do not use this project for handling real transactions.

