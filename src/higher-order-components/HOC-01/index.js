import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default class Main extends Component {
	render() {
		return (
			<div>
				<ClickCounter name="My Name" />
				<HoverCounter />
			</div>
		) 
	}
}