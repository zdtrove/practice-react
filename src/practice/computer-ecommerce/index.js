import React from "react";
import "./index.css";
// import router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import pages
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
// import header
import Header from "./components/Header";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";
import { ProductProvider } from "./context/products";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";
function ComputerEcommerce() {
    return <UserProvider>
        <ProductProvider>
            <CartProvider>
                <Router>
                    <Alert />
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/cart">
                            <Cart />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/checkout" name="john">
                            <Checkout />
                        </PrivateRoute>
                        <Route exact path="/products">
                            <Products />
                        </Route>
                        <Route path="/products/:id" children={<ProductDetails />}></Route>
                        <Route path="*">
                            <Error></Error>
                        </Route>
                    </Switch>
                </Router>
            </CartProvider>
        </ProductProvider>
    </UserProvider>
}

export default ComputerEcommerce;
