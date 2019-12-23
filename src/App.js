import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './components/Menu';
import routes from './router';

class App extends React.Component {
	render() {
	  return (
	    <Router>
	        <Menu />
	        {routes}
	    </Router>
	  );
	}
}

export default App;