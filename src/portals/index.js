import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PortalDemo from './PortalDemo';

export default class Main extends Component {
	render() {
		return <div className="container-fluid">
			<PortalDemo />
		</div>
	}
}