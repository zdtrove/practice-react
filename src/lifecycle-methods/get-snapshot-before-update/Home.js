import React, { Component } from 'react';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentValue: 0,
		}
	}

	componentDidUpdate(props, state, snapShot) {
		console.log("componentDidUpdate", props, state, snapShot);
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("getSnapshotBeforeUpdate", prevProps.data, this.props.data);
		console.log("getSnapshotBeforeUpdate", prevState);
		return prevState.currentValue * 10;
	}

	render() {
		return (
			<div>
				<h1>{ this.state.currentValue }</h1>
				<h1>{ this.props.data }</h1>
				<button onClick={() => {
					this.setState({ currentValue: this.state.currentValue + 1 })
				}}>update state</button>
			</div>
		)
	}
}