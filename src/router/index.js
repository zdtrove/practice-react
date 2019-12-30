import React from 'react';
import Home from '../components/Home';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Profile from '../components/profile';
import Notfound from '../components/Notfound';
import { Switch, Route } from "react-router-dom";

const routes = (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/login" component={Login} />
		<Route path="/signup" component={Signup} />
		<Route path="/profile" component={Profile} />
		<Route component={Notfound} />
    </Switch>
);

export default routes;