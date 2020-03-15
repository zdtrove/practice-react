import React, { Component } from 'react';

export default class FormResult extends Component {
	formatValue = data => Array.isArray(data) ? data.join(', ') : data.toString();
	render() {
		let keys = Object.keys(this.props.data);
		if (keys.length === 0) {
			return <div className="h5 bg-secondary p-2 text-white">
				No data
			</div>
		} else {
			return <div className="container-fluid bg-secondary p-2">
				{ keys.map(key => 
					<div key={ key } className="row h5 text-white">
						<div className="col-6">{ key }</div>
						<div className="col-6">{ this.formatValue(this.props.data[key]) }</div>
					</div>
				)}
			</div>
		}
	}
}