import React, { Component } from 'react';
// import { Message } from "./Message";
// import { List } from "./List";
// import { ExternalCounter } from './ExternalCounter';
// import { HooksMessage } from './HooksMessage';
import { DirectionDisplay } from './DirectionDisplay';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 100,
			showMessage: true,
			counterLeft: 0,
			counterRight: 0
		} 
	}

	changeCounter = (val) => {
		this.setState({ counter: this.state.counter + val })
	}

	// incrementCounter = (counter) => {
	// 	if (counter === "left") {
	// 		this.setState({ counterLeft: this.state.counterLeft + 1});
	// 	} else {
	// 		this.setState({ counterRight: this.state.counterRight+ 1});
	// 	} 
	// }

	// handleChange = () => {
	// 	this.setState({ showMessage: !this.state.showMessage });
	// }

	render() {
		console.log("Render App Component");
		return <div className="container text-center">
			<DirectionDisplay value={ this.state.counter } />
			<div className="text-center">
				<button className="btn btn-primary m-1"
				onClick={ () => this.changeCounter(-1)}>Decrease</button>
				<button className="btn btn-primary m-1"
				onClick={ () => this.changeCounter(1)}>Increase</button>
			</div>
		</div>
	} 
}