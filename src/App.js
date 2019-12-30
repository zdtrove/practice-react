import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './components/Menu';
import routes from './routes';
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import store from './redux/store';

class App extends React.Component {
	render() {
	  return (
	  	<Provider store={store}>
		    <Router>
		        <Menu />
		        <Switch>
		        	{ this.showMenus(routes) }
		        </Switch>
		    </Router>
		</Provider>
	  );
	}

	showMenus = (routes) => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.component}
					/>
				);
			});
		}
		return result;
	}
}

export default App;