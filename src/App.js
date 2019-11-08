import React from 'react';
import './App.css';
import User from './components/user';
import UniqueId from 'react-html-id';

class App extends React.Component {
    constructor() {
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            users: [
                {id: this.nextUniqueId(), name: 'join', age: 20},
                {id: this.nextUniqueId(), name: 'peter', age: 30},
                {id: this.nextUniqueId(), name: 'jil', age: 25}
            ]
        }
        console.log(this.state);
    }

    deleteUser = (index, e) => {
        const users = Object.assign([], this.state.users);
        users.splice(index, 1);
        this.setState({
            users: users
        });
    }

    changeUserName = (id, e) => {
        const index = this.state.users.findIndex((user) => {
            return user.id === id
        });
        const user = Object.assign({}, this.state.users[index]);
        user.name = e.target.value;
        const users = Object.assign([], this.state.users);
        users[index] = user;
        this.setState({
            users: users
        });
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.state.users.map((user, index) => {
                            return <User 
                                    age={user.age} 
                                    delEvent={this.deleteUser.bind(this, index)} 
                                    key={user.id}
                                    changeEvent={this.changeUserName.bind(this, user.id)}
                                >
                                    {user.name}
                                </User>
                        })
                    }
                </ul>
            </div>
        );
    };
}

export default App;
