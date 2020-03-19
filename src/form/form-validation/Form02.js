import React, { Component, useContext } from "react";
import { ErrorMessages } from "./ErrorMessages";
import { FormContext } from './FormContext';

// export default class Form02 extends Component {
// 	static contextType = FormContext;
// 	render() {
// 		return <div className="h5 bg-info text-white p-2">
// 			<div className="form-group">
// 				<label>Name</label>
// 				<input className="form-control" name="name" value={this.context.data.name}
// 					onChange={this.context.updateFormValue} />
// 				{this.context.getMessagesForField('name').map(err =>
// 					<div className="small bg-danger text-white mt-1 p-1" key={err}>
// 						{err}
// 					</div>
// 				)}
// 			</div>
// 			<div className="form-group">
// 				<label>Email</label>
// 				<input className="form-control" name="email" value={this.context.data.email}
// 					onChange={this.context.updateFormValue} />
// 				<ErrorMessages field="email" />
// 			</div>
// 			<div className="form-group">
// 				<label>Order</label>
// 				<textarea className="form-control" name="order" value={this.context.data.order}
// 					onChange={this.context.updateFormValue} />
// 				<ErrorMessages field="order" />
// 			</div>
// 		</div>
// 	} 
// }

// export default class Form02 extends Component {
// 	render() {
// 		return <FormContext.Consumer>
// 			{contextData => 
// 				<div className="h5 bg-info text-white p-2">
// 					<div className="form-group">
// 						<label>Name</label>
// 						<input className="form-control" name="name" value={contextData.data.name}
// 							onChange={contextData.updateFormValue} />
// 						{contextData.getMessagesForField('name').map(err =>
// 							<div className="small bg-danger text-white mt-1 p-1" key={err}>
// 								{err}
// 							</div>
// 						)}
// 					</div>
// 					<div className="form-group">
// 						<label>Email</label>
// 						<input className="form-control" name="email" value={contextData.data.email}
// 							onChange={contextData.updateFormValue} />
// 						<ErrorMessages field="email" />
// 					</div>
// 					<div className="form-group">
// 						<label>Order</label>
// 						<textarea className="form-control" name="order" value={contextData.data.order}
// 							onChange={contextData.updateFormValue} />
// 						<ErrorMessages field="order" />
// 					</div>
// 				</div>
// 			}
// 		</FormContext.Consumer>
// 	} 
// }

export default function Form02(props) {
	const contextData = useContext(FormContext);
	return <div className="h5 bg-info text-white p-2">
		<div className="form-group">
			<label>Name</label>
			<input className="form-control" name="name" value={contextData.data.name}
				onChange={contextData.updateFormValue} />
			{contextData.getMessagesForField('name').map(err =>
				<div className="small bg-danger text-white mt-1 p-1" key={err}>
					{err}
				</div>
			)}
		</div>
		<div className="form-group">
			<label>Email</label>
			<input className="form-control" name="email" value={contextData.data.email}
				onChange={contextData.updateFormValue} />
			<ErrorMessages field="email" />
		</div>
		<div className="form-group">
			<label>Order</label>
			<textarea className="form-control" name="order" value={contextData.data.order}
				onChange={contextData.updateFormValue} />
			<ErrorMessages field="order" />
		</div>
	</div>
}