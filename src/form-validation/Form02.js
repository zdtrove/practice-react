import React, { Component } from "react";
import { ErrorMessages } from "./ErrorMessages";
export default class Form extends Component {
	render() {
		return <div className="h5 bg-info text-white p-2">
			<div className="form-group">
				<label>Name</label>
				<input className="form-control" name="name" value={this.props.data.name}
					onChange={this.props.updateFormValue} />
				<ErrorMessages field="name" />
			</div>
			<div className="form-group">
				<label>Email</label>
				<input className="form-control" name="email" value={this.props.data.email}
					onChange={this.props.updateFormValue} />
				<ErrorMessages field="email" />
			</div>
			<div className="form-group">
				<label>Order</label>
				<textarea className="form-control" name="order" value={this.props.data.order}
					onChange={this.props.updateFormValue} />
				<ErrorMessages field="order" />
			</div>
		</div>
	} 
}