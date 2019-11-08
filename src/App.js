import React from 'react';
import './App.css';
import Child from './components/child';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'john'
        };
        console.log('constructor');
    }

    UNSAFE_componentWillMount() {
        if (window.innerWidth < 500) {
            this.setState({
                innerWidth: window.innerWidth
            });
        }
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    UNSAFE_componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    changeState = () => {
        this.setState({name: 'Sara'});
    }
    
    render() {
        console.log('render');
        return (
            <div className="App">
                name: {this.state.name}
                <hr />
                innerWidth: {this.state.innerWidth}
                <hr />
                <Child name={this.state.name} />
                <button onClick={this.changeState}>Change State</button>
            </div>
        );
    };
}

export default App;
