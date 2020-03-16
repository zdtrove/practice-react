import React, { Component } from 'react';
import { FormValidation } from "./FormValidation";
import { FormContext } from './FormContext';
import { ErrorMessages } from "./ErrorMessages";

export default class FormProvider03 extends Component {
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
		}, () => this.setState({formValid: Object.keys(this.state.errors).length === 0 ? true : false}));
	}

	render() {
		console.log(this.state);
		return <>
			<FormContext.Provider value={ this.state }>
				<div className="h5 bg-info text-white p-2">
					<div className="form-group">
						<label>Name</label>
						<input className="form-control" name="name" value={this.state.data.name}
							onChange={this.updateFormValue} />
						<ErrorMessages field="name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input className="form-control" name="email" value={this.state.data.email}
							onChange={this.updateFormValue} />
						<ErrorMessages field="email" />
					</div>
					<div className="form-group">
						<label>Order</label>
						<textarea className="form-control" name="order" value={this.state.data.order}
							onChange={this.updateFormValue} />
						<ErrorMessages field="order" />
					</div>
				</div>
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