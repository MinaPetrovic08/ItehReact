import React from 'react';

import OneBook from "./OneBook.jsx";

const Books = ({ books, onAdd }) => {

  return (
    <div className="all-books">
      {books.map((book) => (
        <OneBook book1={book} key={book.id} onAdd={onAdd} inCart={1} />
      ))}
      {/* {books.map((book) => {
        return <OneBook book={book} />;
      })} */}
      {/* <OneBook book={books[0]} />
      <OneBook book={books[1]} />
      <OneBook book={books[2]} /> */}
    </div>
  );
};

export default Books;