import React, { useEffect, useState } from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null); // State to track logged-in user
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user if logged in, null if not
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/login'); // Redirect to login page after signing out
      })
      .catch((error) => {
        console.log('Sign out error:', error);
      });
  };

  return (
    <Menu className="header-menu">
      <Menu.Item className="menu-item logo" name="home">
        <Link to="/" className="header-link">DEV@Deakin</Link>
      </Menu.Item>
      <Menu.Menu className="menu-right" position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item className="menu-item" name="post">
          <Link to="/post" className="header-link">Post</Link>
        </Menu.Item>

        {/* Show "Find Questions" link when user is logged in */}
        {user && (
          <Menu.Item className="menu-item" name="find-question">
            <Link to="/find-question" className="header-link">Find Question</Link>
          </Menu.Item>
        )}

        {/* Show "Login" and "Register" when user is NOT logged in */}
        {!user && (
          <>
            <Menu.Item className="menu-item" name="login">
              <Link to="/login" className="header-link">Login</Link>
            </Menu.Item>
            <Menu.Item className="menu-item" name="register">
              <Link to="/register" className="header-link">Register</Link>
            </Menu.Item>
          </>
        )}

        {/* Show "Sign Out" when user is logged in */}
        {user && (
          <Menu.Item className="menu-item" name="signout" onClick={handleSignOut}>
            <span className="header-link">Sign Out</span>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
