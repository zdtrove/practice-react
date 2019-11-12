import React from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'new title 1',
                completed: false
            },
            {
                id: 2,
                title: 'new title 2',
                completed: false
            },
            {
                id: 3,
                title: 'new title 3',
                completed: false
            }
        ]
    }
    render() {
        return (
            <div className="App">
                <Todos todos={this.state.todos} />
            </div>
        );
    };
}

export default App;
