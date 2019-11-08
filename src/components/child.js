import React from 'react';

class Child extends React.Component {

    constructor() {
        super();
        console.log('child constructor');
    }

    UNSAFE_componentWillMount() {
        console.log('child componentWillMount');
    }

    componentDidMount() {
        console.log('child componentDidMount');
    }

    UNSAFE_componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('child shouldComponentUpdate');
        return true;
    }

    UNSAFE_componentWillUpdate() {
        console.log('child componentWillUpdate');
    }
    
    render() {
        console.log('child render');
        return (
            <div className="App">
                child name: {this.props.name}
            </div>
        );
    };
}

export default Child;