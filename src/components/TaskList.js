import React from 'react';
import * as rb from 'react-bootstrap';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

class TaskList extends React.Component {
    componentDidMount() {
        this.props.getAllTask();
    }
    render() {
        var { tasks } = this.props;
        console.log(tasks);
        var tasksList = tasks.map((task, index) => (
            <TaskItem key={ index } task={ task } index={ index + 1 } />
        ));
        return (
            <rb.Row>
                <rb.Col>
                    <rb.Table striped bordered hover>
                        <thead>
                            <tr className="text-center">
                                <th>STT</th>
                                <th>Task name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { tasksList }
                        </tbody>
                    </rb.Table>
                </rb.Col>
            </rb.Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks : state.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTask: bindActionCreators(actions.getAllListRequest, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);