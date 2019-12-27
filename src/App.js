import React from 'react';
import './App.css';
// import CakeContainer from './components/CakeContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
    render() {
        return (
        	<Provider store={store}>
	            <div className="App">
	            	<UserContainer />
	        	{/* 
					<ItemContainer cake />
	            	<ItemContainer />
	                <CakeContainer />
	                <HooksCakeContainer />
	                <IceCreamContainer />
	                <NewCakeContainer />
	        	*/}
	            </div>
	        </Provider>
        );
    };
}

export default App;
