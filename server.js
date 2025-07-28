require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Securely set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Get Contact List ID from environment
const CONTACT_LIST_ID = process.env.SENDGRID_CONTACT_LIST_ID;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST /subscribe route
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    // Step 1: Check if email already exists in the list
    const response = await axios.post(
      'https://api.sendgrid.com/v3/marketing/contacts/search',
      { query: `email = '${email}'` },
      {
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    const contacts = response.data.result;
    if (contacts && contacts.length > 0) {
      return res.status(400).send({ message: 'Email is already subscribed.' });
    }

    // Step 2: Add email to list
    await axios.put(
      'https://api.sendgrid.com/v3/marketing/contacts',
      {
        list_ids: [CONTACT_LIST_ID],
        contacts: [{ email }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    // Step 3: Send welcome email
    const msg = {
      to: email,
      from: 'tanvirrahmantaiyeb@gmail.com',
      subject: 'Welcome to DEV@Deakin Newsletter!',
      html: `
        <p>Hello ${email},</p>
        <p>Thank you for subscribing to the <strong>DEV@Deakin</strong> newsletter!</p>
        <p>You'll receive tutorials, updates, and tips to level up your dev journey.</p>
        <p><em>Stay connected, stay inspired!</em></p>
        <p>Best,<br/>The DEV@Deakin Team</p>
      `,
    };

    await sgMail.send(msg);
    res.status(200).send({ message: `Welcome email sent to ${email}` });

  } catch (error) {
    if (error.response) {
      console.error('Error Status:', error.response.status);
      console.error('Error Data:', error.response.data);
    } else {
      console.error('Error Message:', error.message);
    }
    res.status(500).send({ message: 'Subscription failed. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
