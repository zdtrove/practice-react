import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ParentComp from './ParentComp';

export default class Main extends Component {
	render() {
		return <div>
			<ParentComp />
		</div>
	}
}