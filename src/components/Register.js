import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isEmailInUse, setIsEmailInUse] = useState(false); // New state to track if the email is already in use
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Update the profile with the name
        updateProfile(userCredential.user, {
          displayName: name,
        }).then(() => {
          console.log('Profile updated successfully');
          navigate('/login'); // Redirect to login after successful registration
        });
      })
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          setIsEmailInUse(true); // Setting the state to true if email is already in use
        } else {
          setError('Registration failed: ' + err.message);
        }
      });
  };

  return (
    <div className="auth-form">
      <h2>Create a DEV@Deakin Account</h2>
      {error && <p>{error}</p>}
      {isEmailInUse ? (
        <p>
          Email already in use. <a href="/login">Already registered? Login here.</a>
        </p>
      ) : (
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Create</button>
        </form>
      )}
    </div>
  );
};

export default Register;
