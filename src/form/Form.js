import React, { Component } from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: '',
			select: 'option3',
			selectsMultiple: ['optionMultiple1'],
			radio: 'radio1',
			checkbox: true,
			checkboxMany: ['checkbox1'],
		}
		this.selects = ['option1', 'option2', 'option3', 'option4'];
		this.selectsMultiple = ['optionMultiple1', 'optionMultiple2', 'optionMultiple3', 'optionMultiple4'];
		this.radios = ['radio1', 'radio2', 'radio3', 'radio4'];
		this.checkboxesMany = ['checkbox1', 'checkbox2', 'checkbox3', 'checkbox4'];
	}

	updateFormValue = event => {
		this.setState({
			[event.target.name]: event.target.value,
		}, () => this.props.submit(this.state));
	}

	updateFormValueOptions = event => {
		let options = [...event.target.options].filter(o => o.selected).map(o => o.value);
		this.setState({
			[event.target.name]: options,
		}, () => this.props.submit(this.state));
	}

	updateFormValueCheckbox = event => {
		this.setState({
			[event.target.name]: event.target.checked
		}, () => this.props.submit(this.state));
	}

	updateFormValueCheckboxes = event => {
		event.persist();
		this.setState(state => {
			if (event.target.checked) {
				state.checkboxMany.push(event.target.name);
			} else {
				let index = state.checkboxMany.indexOf(event.target.name);
				state.checkboxMany.splice(index, 1);
			}
		}, () => this.props.submit(this.state));
	}

	render() {
		return <div>
			<div className="form-group">
				<label>Input Text:</label>
				<input className="form-control" type="text" name="inputText" value={ this.state.name }
					onChange={ this.updateFormValue } />
			</div>
			<div className="form-group">
				<label>Select:</label>
				<select className="form-control" name="select" value={ this.state.select }
					onChange={ this.updateFormValue }>
					{ this.selects.map(select => 
						<option value={ select } key={ select }>{ select }</option>
					)}
				</select>
			</div>
			<div className="form-group">
				<label>Multiple Select:</label>
				<select multiple className="form-control" name="selectsMultiple" value={ this.state.selectsMultiple } 
					onChange={ this.updateFormValueOptions }>
					{ this.selectsMultiple.map(selectMultiple => 
						<option value={ selectMultiple } key={ selectMultiple }>{ selectMultiple }</option>
					)}
				</select>
			</div>
			<div className="form-group">
				<label>Radios</label>
				{ this.radios.map(radio => 
					<div className="form-check" key={ radio }>
						<input type="radio" className="form-check-input" name="radio" value={ radio } 
							checked={ this.state.radio === radio } onChange={ this.updateFormValue } />
						<label className="form-check-label">{ radio }</label>
					</div>
				)}
			</div>
			<div className="form-group">
				<div className="form-check">
					<input type="checkbox" name="checkbox" className="form-check-input"
						checked={ this.state.checkbox } onChange={ this.updateFormValueCheckbox } />
					<label className="form-check-label">Checkbox</label>
				</div>
			</div>
			<div className="form-group">
				{ this.checkboxesMany.map(checkbox =>
					<div className="form-check" key={ checkbox }>
						<input className="form-check-input" type="checkbox" name={ checkbox } value={ this.state[checkbox] }
							checked={ this.state.checkboxMany.indexOf(checkbox) > -1 } onChange={ this.updateFormValueCheckboxes } />
						<label className="form-check-label">{ checkbox }</label>
					</div>
				)}
			</div>
		</div>
	}
}