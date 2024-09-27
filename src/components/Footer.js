import React, { useState } from 'react';
import { Container, Grid, Input, Button, Icon, Form } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // New state to store success or error message

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(''); // Clear any previous message

    try {
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      // Checking the message from the server and display the appropriate message on the UI
      if (response.ok) {
        setMessage(result.message); // This will display either "Welcome email sent" or "Email is already subscribed"
      } else {
        setMessage(result.message); // Showing the error message from the server if it's not 200 OK
      }
    } catch (error) {
      setMessage('Failed to send email. Please try again later.');
    } finally {
      setLoading(false);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label>Sign Up for Our Daily Insider</label>
                  <Input
                    icon={<Icon name='mail' inverted circular link />}
                    placeholder='Enter your email...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </Form.Field>
                <Button type='submit' color='teal' loading={loading} disabled={loading}>
                  Subscribe
                </Button>
                {/* Display message */}
                {message && <p>{message}</p>}
              </Form>
            </Grid.Column>
            <Grid.Column>
              <h4>Explore</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#questions">Questions</a></li>
                <li><a href="#articles">Articles</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <h4>Support</h4>
              <ul>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#help">Help</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <h4>Stay Connected</h4>
              <a href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
                <Icon name='facebook' size='large' link />
              </a>
              <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
                <Icon name='twitter' size='large' link />
              </a>
              <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
                <Icon name='linkedin' size='large' link />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
