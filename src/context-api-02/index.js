import React, { Component } from 'react';
import GeneralList from './GeneralList';
import SortedList from "./SortedList";
import 'bootstrap/dist/css/bootstrap.css';
import { ProModeContext } from './ProModeContext';
import { ProModeToggle } from './ProModeToggle';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
			cities: ["London", "New York", "Paris", "Milan", "Boston"],
			proContextData: {
				proMode: false,
				toggleProMode: this.toggleProMode,
			},
			superProContextData: {
				proMode: false,
				toggleProMode: this.toggleSuperMode,
			},
		}
	}
	toggleProMode = () => {
		this.setState(state => state.proContextData.proMode = !state.proContextData.proMode);
	}
	toggleSuperMode = () => {
		this.setState(state => state.superProContextData.proMode = !state.superProContextData.proMode);
	}
	render() {
		return (
			<div className="container-fluid">
				<h1>Context Api</h1>
				<div className="row">
					<div className="col-12 text-center p-2">
						<div className="form-check">
							<input type="checkbox" className="form-check-input" 
								value={this.state.proContextData.proMode} onChange={this.toggleProMode} />
							<label className="form-check-label">Pro Mode</label>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<GeneralList list={this.state.names} theme="primary" />
					</div>
					<div className="col-6">
						<ProModeContext.Provider value={this.state.proContextData}>
							<SortedList list={this.state.names} />
						</ProModeContext.Provider>
					</div>
				</div>
				<hr />
				<h1>Changing Context Data Values in a Consumer</h1>
				<ProModeContext.Provider value={this.state.proContextData}>
					<div className="row">
						<div className="col-12 text-center p-2">
							<ProModeToggle label="Pro Mode" />
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<GeneralList list={this.state.names} theme="primary" />
						</div>
						<div className="col-6">
							<SortedList list={this.state.names} />
						</div>
					</div>
				</ProModeContext.Provider>
				<hr />
				<div className="row">
					<div className="col-6 text-center p-2">
						<ProModeContext.Provider value={this.state.proContextData}>
							<ProModeToggle label="Pro Mode" />
						</ProModeContext.Provider>
					</div>
					<div className="col-6 text-center p-2">
						<ProModeContext.Provider value={this.state.superProContextData}>
							<ProModeToggle label="Super Pro Mode" />
						</ProModeContext.Provider>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<ProModeContext.Provider value={this.state.proContextData}>
							<SortedList list={this.state.names} />
						</ProModeContext.Provider>
					</div>
					<div className="col-6">
						<ProModeContext.Provider value={this.state.superProContextData}>
							<SortedList list={this.state.cities} />
						</ProModeContext.Provider>
					</div>
				</div>
			</div>
		)
	}
}