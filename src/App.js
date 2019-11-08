import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        name: 'myname'
    }

    changeName = (newName) => {
        this.setState({
            name: newName
        });
    }

    changeNameFromInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => this.changeName('new Name')}>Change state using Anon Function</button>
                <button onClick={this.changeName.bind(this, 'new Name 2')}>Change state using bind Function</button>
                <hr />
                <input type="text" onChange={this.changeNameFromInput} value={this.state.name} />
                <hr />
                <div>{this.state.name}</div>
            </div>
        );
    }
}

export default App;
