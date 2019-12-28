import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './components/Menu';
import routes from './router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import store from './redux/store';

class App extends React.Component {
	render() {
	  return (
	  	<Provider store={store}>
		    <Router>
		        <Menu />
		        {routes}
		    </Router>
		</Provider>
	  );
	}
}

export default App;