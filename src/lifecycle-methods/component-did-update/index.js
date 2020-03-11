import React, { Component } from 'react';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		}
	}

	componentDidUpdate(prevProps, prevState, snapShort) {
		console.log("prevState:", prevState);
		console.log("newState:", this.state);
		if (prevState.counter + 1 === this.state.counter) {
			console.log("match State");
		}
	}

	render() {
		return <div>
			<h1>Component Did Update</h1>
			<Child data={this.state.counter} />
			<button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
				Update counter { this.state.counter }
			</button>
		</div>
	}
}

class Child extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		}
	}

	componentDidUpdate(prevProps, prevState, snapShort) {
		console.log("prevProps Child:", prevProps);
		console.log("newProps Child:", this.props);
		if (prevProps.data + 1 === this.props.data) {
			console.log("match Child");
		}
	}

	render() {
		return <div>
			<h2>Child Component { this.props.data }</h2>
		</div>
	}
}