import OneBook from "./OneBook";

const Cart = ({ books }) => {
  return (
    <div className="cart-container">
      <h3>This is your cart.</h3>
      {books.map((book) => (
        <OneBook book1={book} key={book.id} inCart={0} />
      ))}
    </div>
  );
};

export default Cart;