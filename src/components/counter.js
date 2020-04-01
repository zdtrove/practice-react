import React from 'react';

class Counter extends React.Component {
    constructor() {
        console.log('Counter - Constructor');
        super();
        this.state = {
            counter: 0,
            seed: 0
        };
        this.increment = () => this.setState({counter: this.state.counter + 1});
        this.decrement = () => this.setState({counter: this.state.counter - 1});
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.seed && prevState.seed !== nextProps.seed) {
            return {
                seed: nextProps.seed,
                counter: nextProps.seed
            }
        }
        return null;
    }

    componentDidMount() {
        console.log('Counter - componentDidMount');
        console.log('----------------------------------');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Counter - componentDidUpdate');
        console.log('----------------------------------');
    }

    componentWillUnmount() {
        console.log('Counter - componentWillUnmount');
        console.log('----------------------------------');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Counter - shouldComponentUpdate - DO NOT RENDER');
            console.log('----------------------------------');
            return false;
        }

        console.log('Counter - shouldComponentUpdate - RENDER');
        return true;
    }
    
    render() {
        console.log('Counter - Render');
        return (
            <div className="App">
                <button onClick={this.increment}>Increment</button>{' '}
                <button onClick={this.decrement}>Decrement</button>
                <br />
                Counter: {this.state.counter}
            </div>
        );
    };
}

export default Counter;
