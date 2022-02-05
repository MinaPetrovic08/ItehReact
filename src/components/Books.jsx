import React from 'react';
import OneBook from "./OneBook.jsx";

const Books = ({ books, onAdd, onRemove }) => {
  return (
    <div className="all-books">
      {books.map((book) => (
        <OneBook book={book} key={book.id} picture={book.link} onAdd={onAdd} onRemove={onRemove} inCart={1} />
        
      ))}
    </div>
  );
};

export default Books;