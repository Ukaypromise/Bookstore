import React from 'react';
import '../Styles/Categories.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  return (
    <section className="categories-container">
      <span />
      <h1>{status}</h1>
      <button
        type="button"
        className="status-btn"
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
    </section>
  );
};

export default Categories;
