import React, { Component } from 'react';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: 1
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.warn(nextProps);
        if (nextProps.data === 'test') {
            return false;
        }
        return true;
    }
    render() {
        console.warn('render');
        return (
            <div style={{background: "aliceblue"}}>
                <h2>Child Component {this.state.data}</h2>
                <button onClick={() => {
                    this.setState({ data: this.state.data +1 });
                }}>Update state</button>
            </div>
        )
    }
}
