import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/pages/ProductDetail";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { CartContext } from "./contextAPIs";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleInc = (product) => {
    const prod = cartItems.find((item) => item._id === product._id);
    if (!prod) {
      return setCartItems((prev) => [...prev, { ...product, qty: 1 }]);
    }
    const _items = cartItems.map((item) => ({
      ...item,
      qty: product._id === item._id ? item.qty + 1 : item.qty,
    }));
    setCartItems(_items);
  };

  const handleDec = (product) => {
    if (product.qty > 1) {
      const _items = cartItems.map((item) => ({
        ...item,
        qty: product._id === item._id ? item.qty - 1 : item.qty,
      }));
      return setCartItems(_items);
    }
    const idx = cartItems.findIndex((item) => item._id === product._id);
    const _cartItems = [...cartItems];
    _cartItems.splice(idx, 1);
    setCartItems(_cartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, handleInc, handleDec }}>
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={ProductDetail} exact />
        <Route path="/cart" component={Cart} exact />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
