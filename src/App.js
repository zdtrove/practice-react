import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
    render() {
        return (
        	<Provider store={store}>
	            <div className="App">
	                <CakeContainer />
	                <HooksCakeContainer />
	                <IceCreamContainer />
	            </div>
	        </Provider>
        );
    };
}

export default App;
