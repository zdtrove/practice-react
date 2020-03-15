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
			formSubmitted: false,
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

	handleChange = (ev) => {
		let name = ev.target.name;
		this.setState(state => state.dirty[name] = true);
	}

	handleClick = (ev) => {
		this.setState({ formSubmitted: true }, () => {
			if (this.formValid) {
				this.props.submit(this.state.data);
			}
		});
	}

	getButtonClasses() {
		return this.state.formSubmitted && !this.formValid
			? "btn-danger" : "btn-primary";
	}

	getMessagesForField = field => {
		return (this.state.formSubmitted || this.state.dirty[field]) 
			? this.state.errors[field] || [] : [];
	}

	updateFormValue = event => {
		event.persist();
		this.setState(state => {
			state.data[event.target.name] = event.target.value
		});
	}

	render() {
		return <>
			<FormContext.Provider value={ this.state }>
				<div onChange={ this.handleChange }>
					<Form02 data={this.state.data} rules={this.state.rules} submit={this.state.data} updateFormValue={this.updateFormValue} />
				</div>
			</FormContext.Provider>
			<div className="text-center">
				<button className={`btn ${this.getButtonClasses()}`} onClick={this.handleClick}
					disabled={this.state.formSubmitted && !this.formValid}>
					Submit
				</button>
			</div>
		</>
	}
}