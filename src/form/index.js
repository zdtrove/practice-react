import React, { Component } from 'react';
import Form from './Form';
import FormResult from './FormResult';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {},
		}
	}
	render() {
		return <div className="container-fluid">
			<div className="row p-2">
				<div className="col-6">
					<Form />
				</div>
				<div className="col-6">
					<FormResult />
				</div>
			</div>
		</div>
	}
} 