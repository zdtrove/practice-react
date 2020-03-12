import React, { Component } from 'react';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: 0,
		}
	}

	shouldComponentUpdate(prevProps, prevState) {
		console.log(prevState.data);
		console.log(this.state.data);
		if (this.state.data === 3) {
			return false;
		} else {
			return true;
		}
	}

	render() {
		console.log('inside render');
		return (
			<div>
				<h2>Child Component {this.state.data}</h2>
				<button onClick={() => {
					this.setState({data: this.state.data + 1})
				}}>Update state</button>
			</div>
		)
	}
}