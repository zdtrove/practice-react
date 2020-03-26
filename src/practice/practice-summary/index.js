import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchHotelPage from './pages/SearchHotel/SearchHotel';
import CartPhonePage from './pages/CartPhone/CartPhone';
import MyCartPhonePage from './pages/CartPhone/Cart';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import "bootstrap/dist/css/bootstrap.css";
import "./css/SearchHotel.css";
import "./css/CartPhone.css";

export default function Main() {
	return <Router>
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/SearchHotel" component={SearchHotelPage} />
			<Route exact path="/CartPhone" component={CartPhonePage} />
			<Route path="/CartPhone/Cart" component={MyCartPhonePage} />
			<Route component={ErrorPage} />
		</Switch>
	</Router>
}
