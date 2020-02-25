import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

const topics = [
	{
		name: 'React Router',
		id: 'react-router',
		description: 'React Router description',
		resources: [
			{
				name: 'URL Parameters',
				id: 'url-parameters',
				description: 'URL parameters description',
				url: 'https://google.com',
			},
			{
				name: 'Programatically navigate',
				id: 'programmatically-navigate',
				description: 'Programatically navigate description',
				url: 'https://google.com',
			},
		]
	},
	{
		name: 'React JS',
		id: 'reactjs',
		description: 'React JS description',
		resources: [
			{
				name: 'React Lifecycle Events',
				id: 'react-lifecycle',
				description: 'React Lifecycle description',
				url: 'https://google.com',
			},
			{
				name: 'React Context Api',
				id: 'react-context',
				description: 'React Context description',
			}
		]
	},
	{
		name: 'Functional Programming',
		id: 'functional-programming',
		description: 'Functional Programming description',
		resources: [
			{
				name: 'Imperative',
				id: 'imperative',
				description: 'Imperative description',
				url: 'https://google.com',
			},
			{
				name: 'Imperative',
				id: 'imperative',
				description: 'Imperative description',
				url: 'https://google.com',
			},
		]
	}
];