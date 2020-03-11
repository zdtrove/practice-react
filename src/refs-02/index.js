import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import RefsDemo from './RefsDemo';
import FocusInput from './FocusInput';
import FRParentInput from './FRParentInput';

export default class Main extends Component {
	render() {
		return <div className="container-fluid">
			{/* <RefsDemo /> */}
			{/* <FocusInput /> */}
			<FRParentInput />
		</div>
	}
}