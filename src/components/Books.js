import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchBooks } from '../redux/books/Api';
import '../Styles/Books.css';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const dispatchBooks = books.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      category={book.category}
      id={book.id}
      key={book.id}
    />
  ));

  return (
    <div>
      <section>
        <section className="book-list">
          {/* <Book
            title="Hunger Games"
            author="Susana Collins"
            categories="Action"
          /> */}
          {dispatchBooks}
        </section>
        <Form />
      </section>
      ;
    </div>
  );
};

export default Books;
