import React, { Component } from 'react';
import { FormValidation } from "./FormValidation";
import { FormContext } from './FormContext';
import Form02 from './Form02';

export default class FormProvider02 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			dirty: {},
			formValid: false,
			getMessagesForField: this.getMessagesForField,
			data: {
				name: "",
				email: "",
				order: "",
			},
			rules: {
				name: {required: true, minlength: 3, alpha: true},
				email: {required: true, email: true},
				order: {required: true},
			}
		}
	}

	static getDerivedStateFromProps(props, state) {
		return {
			errors: FormValidation(state.data, state.rules)
		};
	}

	get formValid() {
		return Object.keys(this.state.errors).length === 0;
	}

	handleClick = () => {
		if (this.state.formValid) {
			this.props.submit(this.state.data);
		}
	}

	getButtonClasses() {
		return this.state.formValid ? "btn-primary" : "btn-danger";
	}

	getMessagesForField = field => {
		return this.state.dirty[field] ? this.state.errors[field] || [] : [];
	}

	updateFormValue = event => {
		let name = event.target.name;
		let value = event.target.value;
		this.setState(state => state.dirty[name] = true);
		this.setState(state => { 
			state.data[name] = value; 
		}, () => {
			if (Object.keys(this.state.errors).length === 0) {
				this.setState({formValid: true});
			}
		});
	}

	render() {
		return <>
			<FormContext.Provider value={ this.state }>
				<Form02 data={this.state.data} updateFormValue={this.updateFormValue} />
			</FormContext.Provider>
			<div className="text-center">
				<button className={`btn ${this.getButtonClasses()}`} onClick={this.handleClick}
					disabled={!this.state.formValid}>
					Submit
				</button>
			</div>
		</>
	}
}