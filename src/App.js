import "./App.css";
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
      link:"https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/344357_w.jpg",
      title: "Little women",
      description:
        "Little Women is a coming-of-age novel written by American novelist Louisa May Alcott.",
      amount: 0,
    },
    {
      id: 2,
      link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw02u_kl-o9XuIA29G4W9VYPDN2IIpplnvgg&usqp=CAU",
      title: "Pride & Prejudice",
      description:
        "Pride and Prejudice, romantic novel by Jane Austen, published anonymously in three volumes in 1813.",
      amount: 0,
    },
    {
      id: 3,
      link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bA9LIeoO1QQ53Ww-6XsD91_PlovxS0o7Emy9AQSxFv7ZEX_e6StuPcR9V8Gt1K2iF-s&usqp=CAU",
      title: "Wuthering Heights",
      description:
        "Wuthering Heights is an 1847 novel by Emily Brontë, initially published under the pseudonym Ellis Bell.",
      amount: 0,
    },
    {
      id: 4,
      link:"https://almabooks.com/wp-content/uploads/2016/10/sense-and-sensibility.jpg",
      title: "Sense and sensibility",
      description:
        "Sense and Sensibility is a novel by Jane Austen, published in 1811. It was published anonymously",
      amount: 0,
    },
    {
      id: 5,
      link:"https://aschehoug.no/media/catalog/product/9/7/9788203213670_org_53bf71457cee2f781af9ddd9997044ba.jpg",
      title: "Emma",
      description:
        "Emma, by Jane Austen, is a novel about youthful hubris and romantic misunderstandings.",
      amount: 0,
    },
  ]);
  function refreshCart() {
    let newBooks = books.filter((book) => book.amount > 0);
    setCartBooks(newBooks);
  }

  function addToCart (title,id) {
    console.log("Book: " + title+" is added");
    setCartNum(cartNum + 1);
    books.forEach((book) => {
      if (book.id === id) {
        book.amount++;
      }
      console.log(book.amount);
    });
    refreshCart();
  }
  function remFromCart (title,id) {
    console.log("remove");
    books.forEach((book) => {
      if (book.id === id) {
        if (book.amount > 0) {
          setCartNum(cartNum - 1);
          book.amount = book.amount - 1;
          console.log("The book "+title+" has been removed from cart");
        } else {
          alert("Amount of book is already 0.");
        }
      }
    });
    refreshCart();
  }

  return (
    <BrowserRouter className="App">
      <NavBar cartNum={cartNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Books books={books} onAdd={addToCart} onRemove={remFromCart} />}></Route>
        <Route path="/cart" element={<Cart books={cartBooks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

