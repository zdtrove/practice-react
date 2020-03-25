import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {RoomProvider} from './context';
import SearchHotel from './pages/SearchHotel';
import Home from './pages/Home';
import Error from './pages/Error';
import "bootstrap/dist/css/bootstrap.css";
import "./css/search-hotel.css";

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
