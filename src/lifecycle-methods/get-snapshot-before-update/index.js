import React, { Component } from 'react';
import Home from './Home';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: 0,
		}
	}

	render() {
		return (
			<div>
				<h1>Get Snapshot Before Update</h1>
				<button onClick={() => { this.setState({ data: this.state.data + 1 }) }}>
					Click me
				</button>
				<hr />
				<Home data={ this.state.data } />
			</div>
		)
	}
}