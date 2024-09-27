const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');  // For making API requests

const app = express();
const PORT = 5000;

// Setting SendGrid API Key
const SENDGRID_API_KEY = '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';
sgMail.setApiKey(SENDGRID_API_KEY);

// My list ID 
const CONTACT_LIST_ID = '2ce89e9f-3f09-4000-bb8b-f7bbe04e3c97';  // Using the provided contact list ID

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle email subscription
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    // Step 1: Checking if the email is already in the contact list
    const response = await axios.post('https://api.sendgrid.com/v3/marketing/contacts/search', {
      query: `email = '${email}'`
    }, {
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    const contacts = response.data.result;

    // If the email is already in the list
    if (contacts && contacts.length > 0) {
      return res.status(400).send({ message: 'Email is already subscribed.' });
    }

    // Step 2: Adding the email to the contact list if not already subscribed
    await axios.put('https://api.sendgrid.com/v3/marketing/contacts', {
      list_ids: [CONTACT_LIST_ID],
      contacts: [{ email }]
    }, {
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    // Step 3: Send the welcome email
    const msg = {
      to: email,
      from: 'tanvirrahmantaiyeb@gmail.com',  // My email as the sender
      subject: 'Welcome to DEV@Deakin Newsletter!',
      html: `
        <p>Hello ${email},</p>
        <p>Thank you for subscribing to the <strong>DEV@Deakin</strong> newsletter! We're thrilled to have you as part of our growing community of developers, learners, and tech enthusiasts.</p>
        <p>Expect to receive regular updates, tutorials, and articles to help you stay ahead in your learning journey. We're here to support you every step of the way!</p>
        <p><em>Stay connected, stay inspired!</em></p>
        <p>Best regards,<br>The DEV@Deakin Team</p>`,
    };

    await sgMail.send(msg);

    // Success response
    res.status(200).send({ message: `Welcome email sent to ${email}` });
  } catch (error) {
    // Log more detailed error information
    if (error.response) {
      console.error('Error Status:', error.response.status);
      console.error('Error Data:', error.response.data);
    } else {
      console.error('Error Message:', error.message);
    }
    res.status(500).send({ message: 'Failed to send email or add to the contact list. Please try again later.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
