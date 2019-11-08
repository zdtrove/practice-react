import React from 'react';
import User from './User';

class Users extends React.Component {
    state = {
        users: [
            {name: 'John', age: 20},
            {name: 'Jill', age: 30},
            {name: 'Peter', age: 40}
        ],
        title: 'User List'
    };

    makeMeYounger = () => {
        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });
        this.setState({
            newState
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.makeMeYounger}>Make User 10 year younger</button>
                <hr />
                <h2>{this.state.title}</h2>
                {
                    this.state.users.map((user, index) => {
                        return <User age={user.age} key={index}>{user.name}</User>
                    })
                }
            </div>
        );
    }
}

export default Users;