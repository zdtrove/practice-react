import React, { Component } from "react";

export class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Bob",
			flavor: "Vanilla",
			toppings: ["Strawberries"],
			fruit: "Mango",
			twoScoops: true,
			manyCheck: ["check01"],
			order: "order",
		}

		this.flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
		this.fruits = ["Redbull", "Mango", "Sweet", "Maraton"];
		this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
		this.manyChecks = ["check01", "check02", "check03", "check04"];
	}

	updateFormValue = event => {
		this.setState({ 
			[event.target.name]: event.target.value 
		}, () => this.props.submit(this.state));
	}

	updateFormValueOptions = event => {
		let options = [...event.target.options].filter(o => o.selected).map(o => o.value);
		this.setState({ 
			[event.target.name]: options 
		}, () => this.props.submit(this.state));
	}

	updateFormValueCheck = event => {
		this.setState({ 
			[event.target.name]: event.target.checked 
		}, () => this.props.submit(this.state));
	}

	updateFormValueCheckMany = event => {
		event.persist();
		this.setState(state => {
			if (event.target.checked) {
				state.manyCheck.push(event.target.name);
			} else {
				let index = state.manyCheck.indexOf(event.target.name);
				state.manyCheck.splice(index, 1);
			}
		}, () => this.props.submit(this.state));
	}

	render() {
		return <div className="h5 bg-info text-white p-2">
			<div className="form-group">
				<label>Name</label>
				<input 
					className="form-control"
					name="name"
					value={ this.state.name }
					onChange={ this.updateFormValue } 
				/>
			</div>
			<div className="form-group">
				<label>Ice Cream Flavors</label>
				<select 
					className="form-control"
					name="flavor" value={ this.state.flavor }
					onChange={ this.updateFormValue } 
				>
					{ this.flavors.map(flavor =>
						<option value={ flavor } key={ flavor }>
							{ flavor }
						</option>
					)}
				</select>
			</div>
			<div className="form-group">
				<label>Ice Cream Toppings</label>
				<select 
					className="form-control" multiple={true}
					name="toppings" value={ this.state.toppings }
					onChange={ this.updateFormValueOptions }
				>
					{ this.toppings.map(top =>
						<option value={ top } key={ top }>
							{ top }
						</option>
					)}
				</select>
			</div>
			<div className="form-group">
				<label>Fruits</label>
				{ this.fruits.map(fruit =>
					<div className="form-check" key={ fruit }>
						<input 
							className="form-check-input"
							type="radio" name="fruit"
							value={ fruit }
							checked={ this.state.fruit === fruit }
							onChange={ this.updateFormValue } 
						/>
						<label className="form-check-label">
							{ fruit }
						</label>
					</div>
				)}
			</div>
			<div className="form-group">
				<div className="form-check">
					<input 
						className="form-check-input"
						type="checkbox" name="twoScoops"
						checked={ this.state.twoScoops }
						onChange={ this.updateFormValueCheck } 
					/>
					<label className="form-check-label">Two Scoops</label>
				</div>
			</div>
			<div className="form-group">
				<label>Ice Cream Toppings</label>
				{ this.manyChecks.map(many =>
					<div className="form-check" key={ many }>
						<input 
							className="form-check-input"
							type="checkbox" name={ many }
							value={ this.state[many] }
							checked={ this.state.manyCheck.indexOf(many) > -1 }
							onChange={ this.updateFormValueCheckMany } 
						/>
						<label className="form-check-label">{ many }</label>
					</div>
				)}
			</div>
			<div className="form-group">
				<label>Order</label>
				<textarea 
					className="form-control" name="order"
					value={ this.state.order }
					onChange={ this.updateFormValue } 
				/>
			</div>
		</div>
	} 
}