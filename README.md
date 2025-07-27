# DevDeakin Q&A Platform – With Premium Features

A full-stack Q&A platform built using **React**, **Firebase**, and **Stripe**. It allows users to sign up, log in, create posts with Markdown and code snippets, upload images, browse/search questions, and upgrade to a premium plan using Stripe payment integration.

---

## Overview
This application was initially developed as part of an academic project and later enhanced to demonstrate real-world functionality. The app integrates **secure authentication**, **cloud-based data storage**, and a **subscription payment system** to create a functional and scalable platform.

---

## Key Features
- **User Authentication:** Login and registration with Firebase Authentication.
- **Create Posts:** Add questions or tutorials with Markdown support and code syntax highlighting using CodeMirror.
- **Image Uploads:** Attach images to posts using Firebase Storage.
- **Search & Filter:** Browse questions by title, tags, or date.
- **Subscription Plans:** Dedicated page for Free and Premium plans.
- **Stripe Integration:** Secure checkout for upgrading to premium (test mode).
- **Responsive UI:** Designed with Semantic UI React for a clean, user-friendly interface.

---

## Tech Stack
- **Frontend:** React, React Router, Semantic UI React
- **Backend / Serverless:** Firebase (Auth, Firestore, Storage)
- **Payments:** Stripe (React Stripe.js + Express server)
- **Additional Libraries:** CodeMirror, React-Markdown, dotenv

---

## Screenshots
*(Place screenshots in the `/screenshots` folder and update the paths below)*

Example:
<img width="2532" height="1260" alt="image" src="https://github.com/user-attachments/assets/2d4ac92e-fe26-40b3-8b8c-efe99ba447c8" />

<img width="934" height="1252" alt="image" src="https://github.com/user-attachments/assets/45230cdf-8b13-4cbc-8a80-717fd4251ce2" />

<img width="2516" height="1221" alt="image" src="https://github.com/user-attachments/assets/713565de-3b90-4f34-80fb-de1c3aec59d3" />

<img width="1005" height="861" alt="image" src="https://github.com/user-attachments/assets/e22c5d47-1318-4b54-83cc-6e4b646b2388" />

<img width="1389" height="616" alt="image" src="https://github.com/user-attachments/assets/bdd6c957-04a6-45fd-a167-1494f002f451" />


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
# Create a .env file in the root directory and add:
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

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

