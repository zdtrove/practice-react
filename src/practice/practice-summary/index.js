import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CartPhoneProvider } from './context/CartPhoneContext';
import { SearchHotelProvider } from './context/SearchHotelContext';
import SearchHotelPage from './components/SearchHotel/SearchHotel';
import CartPhone from './components/CartPhone/CartPhone';
import MyCartPhone from './components/CartPhone/Cart';
import HomePage from './components/Home';
import ErrorPage from './components/Error';
import "bootstrap/dist/css/bootstrap.css";
import "./css/SearchHotel.css";
import "./css/CartPhone.css";

export default function Main() {
	return (
		<SearchHotelProvider>
			<CartPhoneProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/SearchHotel" component={SearchHotelPage} />
						<Route exact path="/CartPhone" component={CartPhone} />
						<Route path="/CartPhone/Cart" component={MyCartPhone} />
						<Route component={ErrorPage} />
					</Switch>
				</Router>
			</CartPhoneProvider>
		</SearchHotelProvider>
	);
}
