import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Menu() {
	const { i18n } = useTranslation();
	const changeLanguage = (lng) => {
	    i18n.changeLanguage(lng);
	}
    return <>
        <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/login">Login</Link></li>
	        <li><Link to="/signup">Signup</Link></li>
      	</ul>
      	<button onClick={() => changeLanguage('en')}>en</button>
      	<button onClick={() => changeLanguage('vi')}>vi</button>
    </>
}
            
export default Menu