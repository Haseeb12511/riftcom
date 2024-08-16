import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from "./components/pages/ProductDetail";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/product-detail" component={ProductDetail} exact />
      <Route path="/cart" component={Cart} exact />
    </Router>
  );
}

export default App;
