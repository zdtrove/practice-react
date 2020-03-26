import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchHotel from './pages/SearchHotel';
import CartPhone from './pages/CartPhone';
import Home from './pages/Home';
import Error from './pages/Error';
import "bootstrap/dist/css/bootstrap.css";
import "./css/SearchHotel.css";

export default function Main() {
	return <Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/search-hotel" component={SearchHotel} />
			<Route path="/cart-phone" component={CartPhone} />
			<Route component={Error} />
		</Switch>
	</Router>
}
