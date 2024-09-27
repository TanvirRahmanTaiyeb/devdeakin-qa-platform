import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebaseConfig'; // Correct import
import './PostPage.css';

const PostPage = () => {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articleText, setArticleText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    console.log('Submit button clicked');
    try {
      let imageUrl = '';

      if (image) {
        console.log('Image found, uploading...');
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        imageUrl = await new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              console.log('Upload in progress...');
            },
            (error) => {
              console.error('Error uploading image:', error);
              reject(error);
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              console.log('Image uploaded successfully, URL:', downloadURL);
              resolve(downloadURL);
            }
          );
        });
      }

      // Adding current date when posting a question or article
      const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

      console.log('Storing post in Firestore...');
      const docRef = await addDoc(
        collection(db, postType === 'question' ? 'questions' : 'articles'),
        {
          title,
          description,
          tags,
          abstract,
          articleText,
          imageUrl,
          date: currentDate, // Storing the current date
        }
      );

      console.log('Document written with ID: ', docRef.id);
      alert('Post created successfully!');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="post-page">
      <h2>New Post</h2>
      <div className="post-type">
        <label>
          <input
            type="radio"
            value="question"
            checked={postType === 'question'}
            onChange={() => setPostType('question')}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            value="article"
            checked={postType === 'article'}
            onChange={() => setPostType('article')}
          />
          Article
        </label>
      </div>

      {postType === 'question' ? (
        <div className="question-form">
          <div className="form-group">
            <label htmlFor="questionTitle">Title</label>
            <input
              type="text"
              id="questionTitle"
              placeholder="Start your question with how, what, why, etc."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="questionDescription">Describe your problem</label>
            <textarea
              id="questionDescription"
              placeholder="Describe your problem"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="questionTags">Tags</label>
            <input
              type="text"
              id="questionTags"
              placeholder="Please add up to 3 tags to describe what your question is about e.g., React"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <div className="article-form">
          <div className="form-group">
            <label htmlFor="articleTitle">Title</label>
            <input
              type="text"
              id="articleTitle"
              placeholder="Enter the title of your article"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="articleAbstract">Abstract</label>
            <textarea
              id="articleAbstract"
              placeholder="Enter a 1-paragraph abstract"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="articleText">Article Text</label>
            <textarea
              id="articleText"
              placeholder="Enter the main text of your article"
              value={articleText}
              onChange={(e) => setArticleText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="articleTags">Tags</label>
            <input
              type="text"
              id="articleTags"
              placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Common image upload for both question and article */}
      <div className="form-group">
        <label htmlFor="postImage">Add an image:</label>
        <input
          type="file"
          id="postImage"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <button className="post-button" onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default PostPage;
