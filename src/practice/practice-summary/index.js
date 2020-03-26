import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {RoomProvider} from './context/SearchHotelContext';
import SearchHotel from './components/SearchHotel/SearchHotel';
import Home from './components/Home';
import Error from './components/Error';
import "bootstrap/dist/css/bootstrap.css";
import "./css/SearchHotel.css";

export default function Main() {
	return <RoomProvider>
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/search-hotel" component={SearchHotel} />
				<Route component={Error} />
			</Switch>
		</Router>
	</RoomProvider>
}
