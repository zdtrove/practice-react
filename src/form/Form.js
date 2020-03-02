import React, { Component } from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: '',
			select: 'option3',
			selectsMultiple: ['optionMultiple1'],
			radio: 'radio1',
		}
		this.selects = ['option1', 'option2', 'option3', 'option4'];
		this.selectsMultiple = ['optionMultiple1', 'optionMultiple2', 'optionMultiple3', 'optionMultiple4'];
		this.radios = ['radio1', 'radio2', 'radio3', 'radio4'];
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
		</div>
	}
}