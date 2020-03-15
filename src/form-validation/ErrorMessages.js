import React, { Component } from "react";
import { FormContext } from "./FormContext";
export class ErrorMessages extends Component {
	static contextType = FormContext;
	render() {
		return this.context.getMessagesForField(this.props.field).map(err =>
			<div className="small bg-danger text-white mt-1 p-1" key={err}>
				{err}
			</div>
		);
	} 
}