import React, { Component } from 'react';
import './App.css';
// import ContextApi from './01-context-api';
// import BookProject from './02-context-api-book-project';
// import ReactRouter from './03-router-basic';
// import ReactRouter from './04-router-nested-routes';
// import ReactRouter from './05-router-redirects';
// import ReactRouter from './06-router-url-parameters';
// import ReactRouter from './07-router-404-pages';
import ReactRouter from './08-router-preventing-transitions';

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
