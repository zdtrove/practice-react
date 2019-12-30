import React from 'react';
import Home from '../components/Home';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Profile from '../components/profile';
import Notfound from '../components/Notfound';

let routes = [
	{
		path: '/',
		exact: true,
		component: () => <Home />
	},
	{
		path: '/login',
		exact: false,
		component: () => <Login />
	},
	{
		path: '/signup',
		exact: false,
		component: () => <Signup />
	},
	{
		path: '/profile',
		exact: false,
		component: () => <Profile />
	},
	{
		path: '',
		exact: false,
		component: () => <Notfound />
	},
];

export default routes;