import React, { Component } from 'react';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentValue: 0,
		}
	}
	static getDerivedStateFromProps(props, state) {
		console.log("hook", props, state);
		return {
			currentValue: props.data * 10,
		};
	}
	render() {
		console.log("render");
		return (
			<div>
				<h1>current Value: { this.state.currentValue }</h1>
			</div>
		)
	}
}