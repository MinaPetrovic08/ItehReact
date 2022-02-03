import React from 'react';
import { TiPlusOutline} from "react-icons/ti";
import { BsDashLg } from "react-icons/bs";

function OneBook({ book, onAdd, inCart }) {
    const stil = { margin: 1 + "em", borderStyle: "dotted" };
    return (
      <div className={inCart === 1 ? "card" : "card-cart"} style={stil}>
        <img
          className={inCart === 1 ? "card-img-top" : "card-img-left"}
          src="https://picsum.photos/200"
          alt="Bookstore"
        />
        <div className="card-body">
          <h3 className="card-title">{book.title}</h3>
          <p className="card-text">{book.description}</p>
        </div>
         {/* <button className="btn" onClick={() => onAdd(book.title)}> */}
        {inCart === 1 ? (
          <>
            <button
              className="btn"
              onClick={() => onAdd(book.title, book.id)}
            >
              <TiPlusOutline/>
            </button>
            <button className="btn">
              <BsDashLg />
            </button>
          </>
        ) : (
          <h4>Amount: {book.amount}</h4>
        )}
      </div>
    );
  }

export default OneBook;
