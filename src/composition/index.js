import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Message from './Message';
import ActionButton from './ActionButton';
import ThemeSelector from './ThemeSelector';
import GeneralList from './GeneralList';
import SortedList from "./SortedList";
import ProFeature from "./ProFeature";
import ProController from "./ProController";
import LogToConsole from "./LogToConsole";
import ProFeatureRenderProps from "./ProFeatureRenderProps";
import ProFeatureRenderPropsWithArgument from './ProFeatureRenderPropsWithArgument';

const ProList = ProFeature(SortedList);
const ProListStatefull = ProController(SortedList);
const ProListCombine = ProController(LogToConsole(SortedList, "Sorted", true, true, true));

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
            cities: ["London", "New York", "Paris", "Milan", "Boston"],
            proMode: false,
        }
    }

    toggleProMode = () => {
        this.setState({ proMode: !this.state.proMode });
    }

    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div className="m-2 text-center">
                <h2>Using the Children Prop</h2>
                <ThemeSelector>
                    <Message theme="primary" message={`Counter: ${this.state.counter}`} />
                    <ActionButton theme="secondary" text="Increment" callback={this.incrementCounter} />
                </ThemeSelector>
                <hr />
                <h2>Specialized Component</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <GeneralList list={this.state.names} theme="primary" />
                        </div>
                        <div className="col-6">
                            <SortedList list={this.state.names} />
                        </div>
                    </div>
                </div>
                <hr />
                <h2>Higher-Order Components</h2>
                <div className="row">
                    <div className="col-12 text-center p-2">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input"
                                value={this.state.proMode}
                                onChange={this.toggleProMode} />
                            <label className="form-check-label">Pro Mode</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <GeneralList list={this.state.names} theme="primary" />
                    </div>
                    <div className="col-3">
                        <ProList list={this.state.names} pro={this.state.proMode} />
                    </div>
                    <div className="col-3">
                        <GeneralList list={this.state.cities} theme="secondary" />
                    </div>
                    <div className="col-3">
                        <ProList list={this.state.cities} pro={this.state.proMode} />
                    </div>
                </div>
                <hr />
                <h2>Stateful Higher-Order Components</h2>
                <div className="row">
                    <div className="col-3">
                        <GeneralList list={this.state.names} theme="primary" />
                    </div>
                    <div className="col-3">
                        <ProListStatefull list={this.state.names} />
                    </div>
                    <div className="col-3">
                        <GeneralList list={this.state.cities} theme="secondary" />
                    </div>
                    <div className="col-3">
                        <ProListStatefull list={this.state.cities} />
                    </div>
                </div>
                <hr />
                <h2>Combining Higher-Order Components</h2>
                <div className="row">
                    <div className="col-3">
                        <GeneralList list={this.state.names} theme="primary" />
                    </div>
                    <div className="col-3">
                        <ProListCombine list={this.state.names} />
                    </div>
                    <div className="col-3">
                        <GeneralList list={this.state.cities} theme="secondary" />
                    </div>
                    <div className="col-3">
                        <ProListCombine list={this.state.cities} />
                    </div>
                </div>
                <hr />
                <h2>Using Render Props</h2>
                <div className="row">
                    <div className="col-12 text-center p-2">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" value={this.state.proMode}
                                onChange={this.toggleProMode} />
                            <label className="form-check-label">Pro Mode</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <GeneralList list={this.state.names} theme="primary" />
                    </div>
                    <div className="col-6">
                        <ProFeatureRenderProps pro={this.state.proMode} render={() => <SortedList list={this.state.names} />} />
                    </div>
                </div>
                <hr />
                <h2>Render Prop with an Argument</h2>
                <div className="row">
                    <div className="col-12 text-center p-2">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input"
                                value={this.state.proMode}
                                onChange={this.toggleProMode} />
                            <label className="form-check-label">Pro Mode</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <GeneralList list={this.state.names} theme="primary" />
                    </div>
                    <div className="col-6">
                        <ProFeatureRenderPropsWithArgument pro={this.state.proMode}
                            render={text =>
                                <>
                                    <h4 className="text-center">{text}</h4>
                                    <SortedList list={this.state.names} />
                                </>
                            } 
                        />
                    </div>
                </div>
            </div>
        )
    }
}
