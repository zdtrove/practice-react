import React from 'react';
import './App.css';

const Temp = (props) => {
    return (
        <React.Fragment>
            {props.greetings}
        </React.Fragment>
    );
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Temp greetings="hi" />
            </div>
        );
    };
}

export default App;
