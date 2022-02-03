import './App.css';
import NavBar from "./components/NavBar";
import Books from "./components/Books";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cartBooks, setCartBooks] = useState([]);
  const [books] = useState([
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ]);
  function refreshCart() {
    let newBooks = books.filter((book) => book.amount > 0);
    setCartBooks(newBooks);
  }
  function addBook(title, id) {
    console.log("Dodata je knjiga: " + title);
    setCartNum(cartNum + 1);
    books.forEach((book) => {
      if (book.id === id) {
        book.amount++;
      }
      console.log(book.amount);
    });
    refreshCart();
  }
  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Books books={books} onAdd={addBook} />}
        />
        <Route path="/cart" element={<Cart books={cartBooks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

