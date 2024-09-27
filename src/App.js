import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import PostPage from './components/PostPage';
import Register from './components/Register';
import Login from './components/Login';
import FindQuestion from './components/FindQuestion'; // Import the Find Question component
import 'semantic-ui-css/semantic.min.css';  // Importing Semantic UI CSS

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/find-question" element={<FindQuestion />} /> {/* Add Find Question route */}
      </Routes>
    </Router>
  );
}

export default App;
