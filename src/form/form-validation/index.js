import React, { Component } from 'react';
import FormProvider04 from './FormProvider04';
import Form04 from './Form04';
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
					<FormProvider04 submit={this.submitData}>
						<Form04 />
					</FormProvider04>
				</div>
				<div className="col-6">
					<FormResult data={ this.state.formData } />
				</div>
			</div>
		</div>
	}
}