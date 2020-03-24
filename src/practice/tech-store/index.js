import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import { ProductProvider } from "./context";

class App extends Component {
    render() {
        return <ProductProvider>
            <Router>
                <Navbar />
                <Sidebar />
                <SideCart />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/products" exact component={Products} />
                    <Route path="/products/:id" exact component={SingleProduct} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
                <Footer />
            </Router>
        </ProductProvider>
    }
}

export default App;
