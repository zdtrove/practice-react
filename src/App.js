import React, { Component } from 'react';
import './App.css';
// import ContextApi from './context-api';
// import BookProject from './context-api-book-project';
// import ReactRouter from './router-basic';
// import ReactRouter from './router-nested-routes';
// import ReactRouter from './router-redirects';
// import ReactRouter from './router-url-parameters';
// import ReactRouter from './router-404-pages';
// import ReactRouter from './router-preventing-transitions';
// import Refs from './refs';
// import Form from './form';
// import PureComponent from './pure-components';
// import Refs02 from './refs-02';
// import Portals from './portals';
// import LifecycleMethods from './lifecycle-methods';
// import TicTacToe from './tic-tac-toe';
import Composition from './composition';

class App extends Component {
    render() {
        return (
        	<div className="App">
            	<Composition />
            </div>
    	);
    }
}

export default App;
