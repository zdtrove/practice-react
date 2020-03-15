import React, { Component } from 'react';
import FormProvider02 from './FormProvider02';
import FormResult from './FormResult';
import 'bootstrap/dist/css/bootstrap.css';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {},
		}
	}

	submitData = newData => {
		this.setState({ formData: newData });
	}

	render() {
		return <div className="container-fluid">
			<div className="row">
				<div className="col-6">
					<FormProvider02 submit={ this.submitData } />
				</div>
				<div className="col-6">
					<FormResult data={ this.state.formData } />
				</div>
			</div>
		</div>
	}
}