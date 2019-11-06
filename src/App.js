import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewTodo } from './actions/todos.actions';

class App extends React.Component {
    state = {
        newTodo: ''
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewTodoProps(this.state.newTodo);
    }
    render() {
        let todosList = this.props.todos.map((todo, i) => {
            return (
                <li key={i}>{todo}</li>
            )
        });
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.newTodo}
                        onChange={(event) => this.setState({newTodo: event.target.value})}
                    />
                    <button type="submit">Submit</button>
                </form>
                <h2>List of todos</h2>
                <ul>{todosList}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTodoProps: bindActionCreators(addNewTodo, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
