// import React, { createContext, useState } from 'react';
import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	// Not using Reducer
	// const [books, setBooks] = useState([
	// 	{title: 'name of the wind', author: 'patrick rothfuss', id: 1},
	// 	{title: 'the final empire', author: 'brandon sanderson', id: 2},
	// ]);
	// const addBook = (title, author) => {
	// 	setBooks([...books, {title, author, id: uuid() }]);
	// };
	// const removeBook = (id) => {
	// 	setBooks(books.filter(book => book.id !== id));
	// }
	// return (
	// 	<BookContext.Provider value={{books, addBook, removeBook}}>
	// 		{ props.children }
	// 	</BookContext.Provider>
	// );

	// Using Reducer
	const [books, dispatch] = useReducer(bookReducer, [], () => {
		const localData = localStorage.getItem('books');
		return localData ? JSON.parse(localData) : [];
	});
	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [books]);
	
	return (
		<BookContext.Provider value={{books, dispatch}}>
			{ props.children }
		</BookContext.Provider>
	);
}

export default BookContextProvider;