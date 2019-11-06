import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as rb from 'react-bootstrap';
import TaskList from './components/TaskList';

function App() {
    return (
        <rb.Container fluid>
            <rb.Row className="text-center pt-5">
                <rb.Col>
                    <h2>Task Control</h2>
                    <hr />
                </rb.Col>
            </rb.Row>
            <rb.Row className="pb-2">
                <rb.Col>
                    <rb.Button>Add Task</rb.Button>
                </rb.Col>
            </rb.Row>
            <rb.Row>
                <rb.Col>
                    <rb.InputGroup className="mb-3">
                        <rb.FormControl placeholder="Type keyword..." />
                        <rb.InputGroup.Append>
                            <rb.Button variant="outline-secondary">Search</rb.Button>
                        </rb.InputGroup.Append>
                    </rb.InputGroup>
                </rb.Col>
                <rb.Col>
                    <rb.DropdownButton
                        variant="outline-secondary"
                        title="Sort"
                    >
                        <rb.Dropdown.Item href="#">Action</rb.Dropdown.Item>
                        <rb.Dropdown.Item href="#">Another action</rb.Dropdown.Item>
                        <rb.Dropdown.Item href="#">Something else here</rb.Dropdown.Item>
                        <rb.Dropdown.Item href="#">Separated link</rb.Dropdown.Item>
                    </rb.DropdownButton>
                </rb.Col>
            </rb.Row>
            <TaskList />
        </rb.Container>
    );
}

export default App;
