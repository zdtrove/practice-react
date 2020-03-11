import React, { Component } from 'react';

export default class Main extends Component {
	constructor(props) {
		super(props);
		console.log('constructor');
		this.state = {
			data: false,
		}
	}

	componentDidMount() {
		console.log('componentDidMount');
		this.setState({ data: true });
	}

	render() {
		console.log('render');
		return (
			<div>
				<h1>Component Did Mount</h1>
			</div>
		)
	}
}