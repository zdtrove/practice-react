import React, { Component } from 'react';
import FormContext from './FormContext';

export class FormValidation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			dirty: {},
			formSubmited: false,
			getMessageForField: this.getMessageForField
		}
	}

	render() {
		return <>
			<FormContext.Provider value={ this.state }>
				{ this.props.children }
			</FormContext.Provider>
		</>
	}
}