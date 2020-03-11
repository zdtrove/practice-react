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
				<h1>Get Drived State From Props { this.state.data }</h1>
				<Home data={ this.state.data } />
				<button onClick={() => { this.setState({ data: this.state.data + 1 }) }}>
					make ++
				</button>
			</div>
		)
	}
}