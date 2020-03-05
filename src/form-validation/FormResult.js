import React, { Component } from 'react';

export default class FormResult extends Component {
	formatValue = data => Array.isArray(data) ? data.join(', ') : data.toString();
	render() {
		let keys = Object.keys(this.props.data);
		if (keys.length === 0) {
			return <div className="container-fluid">
				No data
			</div>
		} else {
			return <div className="container-fluid">
				{ keys.map(key => 
					<div key={ key } className="row">
						<div className="col-6">{ key }</div>
						<div className="col-6">{ this.formatValue(this.props.data[key]) }</div>
					</div>
				)}
			</div>
		}
	}
}