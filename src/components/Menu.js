import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Menu() {
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
	    i18n.changeLanguage(lng);
	}
    return <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
		<Link to="/" className="navbar-brand">Home</Link>
		<ul className="navbar-nav mr-auto">
		    <li className="nav-item">
		      <Link to="/posts" className="nav-link">Posts</Link>
		    </li>
	  	</ul>
	  	<img onClick={() => changeLanguage('en')} src="assets/imgs/en.png" alt="en" className="mr-1 flagEn" />
	  	<img onClick={() => changeLanguage('vi')} src="assets/imgs/vi.png" alt="vi" className="flagVi" />
		<ul className="navbar-nav">
		    <li className="nav-item">
		      <Link to="/signup" className="nav-link">{ t('signup.signup') }</Link>
		    </li>
		    <li className="nav-item">
		      <Link to="/login" className="nav-link">{ t('login.login') }</Link>
		    </li>
	  	</ul>
	  	<div className="form-inline">
		    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
		    <button className="btn btn-success">Search</button>
		</div>
	</nav>
}
            
export default Menu