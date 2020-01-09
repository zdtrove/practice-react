import React, { Component } from 'react';
import { EditorValidation } from "./EditorValidation";
import { Display } from "./Display";

export default class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
			formData: {}
		} 
	}

	submitData = newData => {
		this.setState({ formData: newData});
	}

	render() {
		return <div className="container-fluid">
			<div className="row p-2">
				<div className="col-6">
					<EditorValidation submit={ this.submitData } />
				</div>
				<div className="col-6">
					<Display data={ this.state.formData } />
				</div>
			</div>
		</div>
	} 
}
