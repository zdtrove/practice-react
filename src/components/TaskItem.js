import React from 'react';

function TaskItem(props) {
    return (
        <tr>
            <td>{ props.index }</td>
            <td>{ props.task.name }</td>
            <td>{ props.task.status === true ? 'Active' : 'Inactive' }</td>
            <td>Delete</td>
        </tr>
    );
}

export default TaskItem;