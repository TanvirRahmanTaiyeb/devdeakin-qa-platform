// src/components/PlansPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Plans.css'; // Linking to updated CSS

const PlansPage = () => {
  const navigate = useNavigate();

  // Handling selecting the premium plan
  const handleSelectPremium = () => {
    navigate('/payment'); // Redirecting to payment page when Premium plan is selected
  };

  return (
    <div className="plans-container">
      <h1>Choose Your Plan</h1>

      <div className="plan">
        <h2>Free Plan</h2>
        <p>Access to basic features.</p>
        <ul className="features-list">
          <li>Post and answer questions</li>
          <li>Search questions</li>
          <li>Basic user profile</li>
          <li>Access to public content</li>
        </ul>
      </div>

      <div className="plan premium-plan">
        <h2>Premium Plan</h2>
        <p>Advanced features, customization, and support.</p>
        <ul className="features-list">
          <li>Customizable messages and banners</li>
          <li>Premium themes and UI customization</li>
          <li>Analytics dashboard for tracking user activity</li>
          <li>Advanced content controls</li>
          <li>Priority support and customer service</li>
        </ul>
        <button onClick={handleSelectPremium} className="premium-btn">
          Select Premium Plan
        </button>
      </div>
    </div>
  );
};

export default PlansPage;
