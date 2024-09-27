import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
      const questionList = querySnapshot.docs.map((doc) => ({
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

  // Handling hide question
  const handleHideQuestion = (id) => {
    setFilteredQuestions((prevQuestions) =>
      prevQuestions.filter((q) => q.id !== id)
    );
  };

  // Handling drag-and-drop reordering
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedQuestions = Array.from(filteredQuestions);
    const [removed] = reorderedQuestions.splice(result.source.index, 1);
    reorderedQuestions.splice(result.destination.index, 0, removed);

    setFilteredQuestions(reorderedQuestions);
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

      {/* Simplified drag-and-drop implementation */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="questions-list">
          {(provided) => (
            <div
              className="question-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredQuestions.map((question, index) => (
                <Draggable
                  key={question.id}
                  draggableId={question.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="question-card"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <QuestionCard
                        question={question}
                        onHide={() => handleHideQuestion(question.id)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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
        <button
          className="details-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
    </div>
  );
};

export default FindQuestion;
