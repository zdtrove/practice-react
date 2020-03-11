import React, { Component } from 'react';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		}
	}
	render() {
		return <div>
			<h1>Component Will Unmount</h1>
			{ this.state.show ? <Child /> : null }
			<button onClick={() => { this.setState({ show: !this.state.show }) }}>Toggle child</button>
		</div>
	}
}

class Child extends Component {
	componentWillUnmount() {
		console.log("component is hidden now");
	}
	render() {
		return <div>
			<h2>Child Component</h2>
		</div>
	}
}