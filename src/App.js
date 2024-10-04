import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import PostPage from './components/PostPage';
import Register from './components/Register';
import Login from './components/Login';
import FindQuestion from './components/FindQuestion';
import Payment from './components/Payment'; // Import Payment
import PlansPage from './components/PlansPage'; // Import the new PlansPage
import { getAuth, onAuthStateChanged } from 'firebase/auth';  // Firebase auth
import { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';  // Importing Semantic UI CSS

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/find-question" element={<FindQuestion />} />
        <Route path="/plans" element={<PlansPage />} />  {/* New route for PlansPage */}
        {/* Protect the payment route */}
        {user ? (
          <Route path="/payment" element={<Payment />} />
        ) : (
          <Route path="/login" element={<Login />} /> /* Redirect to login if not authenticated */
        )}
      </Routes>
    </Router>
  );
}

export default App;
