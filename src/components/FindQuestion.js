import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './FindQuestion.css'; // Importing the updated styles

const FindQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filters, setFilters] = useState({ title: '', tag: '', date: '' });

  // Fetching questions from Firestore
  useEffect(() => {
    const fetchQuestions = async () => {
      const qCollection = collection(db, 'questions');
      const querySnapshot = await getDocs(qCollection);
      const questionList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(questionList);
      setFilteredQuestions(questionList);
    };
    fetchQuestions();
  }, []);

  // Handling filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    applyFilters({ ...filters, [name]: value });
  };

  // Applying filters
  const applyFilters = (filterCriteria) => {
    const { title, tag, date } = filterCriteria;
    let updatedQuestions = questions;

    if (title) {
      updatedQuestions = updatedQuestions.filter((q) =>
        q.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (tag) {
      updatedQuestions = updatedQuestions.filter((q) =>
        q.tags.toLowerCase().includes(tag.toLowerCase())
      );
    }

    if (date) {
      updatedQuestions = updatedQuestions.filter((q) => q.date === date);
    }

    setFilteredQuestions(updatedQuestions);
  };

  // Handling the hide question feature
  const handleHideQuestion = (id) => {
    setFilteredQuestions((prevQuestions) =>
      prevQuestions.filter((q) => q.id !== id)
    );
  };

  return (
    <div className="find-question-page">
      <h2>Find Questions</h2>

      <div className="filters">
        <input
          type="text"
          name="title"
          placeholder="Filter by title"
          value={filters.title}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="tag"
          placeholder="Filter by tag"
          value={filters.tag}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Filter by date"
          value={filters.date}
          onChange={handleFilterChange}
        />
      </div>

      <div className="question-list">
        {filteredQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            onHide={() => handleHideQuestion(question.id)}
          />
        ))}
      </div>
    </div>
  );
};

// QuestionCard component to display individual questions
const QuestionCard = ({ question, onHide }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="question-card">
      <div className="question-header" onClick={() => setExpanded(!expanded)}>
        <img
          className="question-image"
          src={question.imageUrl || 'default-image-url.png'}
          alt={question.title}
        />
        <h3>{question.title}</h3>
      </div>
      {expanded && (
        <div className="question-details">
          <p>{question.description}</p>
          <p>Tags: {question.tags}</p>
          <p>Date: {question.date}</p>
        </div>
      )}
      <div className="question-actions">
        <button className="hide-button" onClick={onHide}>
          Hide
        </button>
        <button className="details-button" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
    </div>
  );
};

export default FindQuestion;
