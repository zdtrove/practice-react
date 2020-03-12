import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import ComponentWillUnmount from './component-will-unmount';
// import ComponentDidUpdate from './component-did-update';
// import ComponentDidMount from './component-did-mount';
// import GetDrivedStateFromProps from './get-derived-state-from-props';
// import GetSnapshotBeforeUpdate from './get-snapshot-before-update';
import ShouldComponentUpdate from './should-component-update';

export default class Main extends Component {
	render() {
		return <div className="container-fluid">
			<ShouldComponentUpdate />
		</div>
	}
}