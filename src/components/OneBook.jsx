import React from 'react';
import { BsBagPlusFill, BsBagDashFill} from "react-icons/bs";

function OneBook({ book, onAdd, onRemove, inCart }) {
    const stil = { margin: 1 + "em", borderStyle: "dotted" };
    const stilPicture = {heigh:300, width:200};
    return (
      <div className={inCart === 1 ? "card" : "card-cart"} style={stil}>
        <img
          className={inCart === 1 ? "card-img-top" : "card-img-left"}
          src={book.link}
          alt="Bookstore"
          style = {stilPicture}
        />
        <div className="card-body">
        <h3 className="card-title">{book.title}</h3>
          <p className="card-text">{book.description}</p>
        </div>
        {inCart === 1 ? (
          <>
            <button
              className="btn" 
              onClick={() => onAdd(book.title,book.id)}
            >
              <BsBagPlusFill/>
            </button>
            <button  
              className="btn" 
              onClick={() => onRemove(book.title,book.id)}
            >
              <BsBagDashFill/>
            </button>
          </>
        ) : (
          <h4>Amount: {book.amount}</h4>
        )}
      </div>
    );
  }

export default OneBook;
