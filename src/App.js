import React from 'react';
import './App.css';
import HookTimer from './components/hook15/HookTimer';
import ClassTimer from './components/hook15/ClassTimer';

function App() {
    return (
        <div className="App">
        	<ClassTimer />
        	<HookTimer />
        </div>
    );
}

export default App;
