import React, { Component } from 'react';
import './App.css';
// import ContextApi from './context-api';
// import BookProject from './book-project';
import ReactRouter from './react-router-redirects';
// import ReactRouter from './react-router-basic';
// import ReactRouter from './react-router-url-parameters';

class App extends Component {
    render() {
        return (
        	<div>
            	<ReactRouter />
            </div>
    	);
    }
}

export default App;
