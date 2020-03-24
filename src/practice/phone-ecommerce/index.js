import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import { ProductProvider } from "./context";

export default class PhoneEcommerce extends Component {
    render() {
        return <ProductProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Switch>
            </Router>
        </ProductProvider>   
    }
}
