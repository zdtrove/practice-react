import React from 'react';
import './App.css';
// import ClassMouse from './components/hook06/ClassMouse';
import HookMouse from './components/hook06/HookMouse';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/* <ClassMouse /> */}
                <HookMouse />
            </div>
        );
    };
}

export default App;
