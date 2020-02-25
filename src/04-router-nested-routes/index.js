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
				name: 'Building User',
				id: 'buiding',
				description: 'Building description',
				url: 'https://google.com',
			},
		]
	}
];

const Home = () => <h1>Home</h1>;
const Resource = ({ match }) => {
	const topic = topics.find(({ id }) => id === match.params.topicId)
	.resources.find(({ id }) => id === match.params.subId);
	return (
		<div>
			<h3>{topic.name}</h3>
			<p>{topic.description}</p>
			<a href={topic.url}>More Info.</a>
		</div>
	);
}
const Topic = ({ match }) => {
	const topic = topics.find(({ id }) => id === match.params.topicId);
	return <div>
		<h2>{topic.name}</h2>
		<p>{topic.description}</p>
		<ul>
			{topic.resources.map((sub) => (
				<li key={sub.id}>
					{/*<Link to={`/topics/${match.params.topicId}/${sub.id}`}>*/}
					<Link to={`${match.url}/${sub.id}`}>
						{sub.name}
					</Link>
				</li>
			))}
		</ul>

		<hr />

		{/*<Route path={`/topics/:topicId/:subId`} component={Resource} />*/}
		<Route path={`${match.path}/:subId`} component={Resource} />
	</div>
}
const Topics = () => (
	<div>
		<h1>Topics</h1>
		<ul>
			{topics.map(({ name, id }) => (
				<li key={id}>
					<Link to={`/topics/${id}`}>{name}</Link>
				</li>
			))}
		</ul>

		<hr />

		<Route path={`/topics/:topicId`} component={Topic} />
	</div>
);

class ReactRouter extends Component {
	render() {
		return (
			<Router>
				<div style={{ width: 1000, margin: '0 auto' }}>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/topics'>Topics</Link></li>
					</ul>

					<hr />

					<Route exact path='/' component={Home} />
					<Route path='/topics' component={Topics} />
				</div>
			</Router>
		);
	}
}

export default ReactRouter;