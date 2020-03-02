import React, { Component } from 'react';

export default class FormResult extends Component {
	formatValue = data => Array.isArray(data) ? data.join(', ') : data.toString();
	render() {
		let keys = Object.keys(this.props.data);
		if (keys.length === 0) {
			return <div>
				No data
			</div>
		} else {
			return <div className="container-fluid">
				{ keys.map(key =>
					<div className="row" key={ key }>
						<div className="col">{ key }</div>
						<div className="col">{ this.formatValue(this.props.data[key]) }</div>
					</div>
				)}
			</div>
		}
	}
}