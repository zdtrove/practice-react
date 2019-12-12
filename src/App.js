import React from 'react';
import './App.css';
import Home from './Home';

export default class App extends React.Component {
    render() {
        return  <div className="App">
            <h1>shouldComponentUpdate</h1>
            <Home data="test" />
        </div>
    };
}