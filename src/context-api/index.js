import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import './index.css';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeToggle from './components/ThemeToggle';

class ContextApi extends React.Component {
	render() {
		return <>
			<div className="App">
				<ThemeContextProvider>
					<AuthContextProvider>
						<Navbar />
						<BookContextProvider>
							<BookList />
						</BookContextProvider>
						<ThemeToggle />
					</AuthContextProvider>
				</ThemeContextProvider>
			</div>
		</>
	}
}

export default ContextApi;