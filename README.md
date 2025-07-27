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
![Homepage](screenshots/home.png)
![Post Page](screenshots/post.png)
![Plans Page](screenshots/plans.png)
![Payment](screenshots/payment.png)

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

## Live Demo
*(Deploy via Vercel or Netlify and include your link here)*  
Example: [Live Demo](https://your-deployment-link.com)

---

## Disclaimer
This project was originally developed as part of an academic learning exercise and later enhanced for demonstration purposes.  
It is not intended for production use. All API keys and payment integrations (Stripe) are in **test mode only**.  
Please do not use this project for handling real transactions.

