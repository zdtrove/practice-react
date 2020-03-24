import React from 'react';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

export default function Main() {
	return <Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/rooms" component={Rooms} />
			<Route exact path="/rooms/:slug" component={SingleRoom} />
		</Switch>
	</Router>
}