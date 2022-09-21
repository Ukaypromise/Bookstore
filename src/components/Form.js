import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/books';
import '../Styles/Form.css';

const Form = () => {
  // Set States
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('DEFAULT');
  const dispatch = useDispatch();

  // Handle Submit book
  const handleAddBook = () => {
    if (title === '' || author === '' || category !== 'DEFAULT') {
      dispatch(addBook(title, author, category, nanoid()));
      setTitle('');
      setAuthor('');
      setCategory('DEFAULT');
    }
  };

  return (
    <form className="form-container">
      <h1>ADD NEW BOOK</h1>
      <div className="form-inputs">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          name="categories"
          id="categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="DEFAULT">
            select an option
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Action">Action</option>
          <option value="Romance">Science</option>
        </select>
        <button type="button" className="add-btn" onClick={handleAddBook}>
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default Form;
