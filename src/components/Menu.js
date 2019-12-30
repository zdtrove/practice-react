import React from 'react';
import { Link, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route 
			path={to}
			exact={activeOnlyWhenExact}
			children={({ match }) => {
				let active = match ? 'nav-item active' : 'nav-item';
				return (
					<li className={active}>
						<Link to={to} className="nav-link">{label}</Link>
					</li>
				);
			}}
		/>
	);
}

function Menu() {
	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
	    i18n.changeLanguage(lng);
	}
    return <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
		<ul className="navbar-nav mr-auto">
		    <MenuLink to="/" label="Home" activeOnlyWhenExact={true} />
		    <MenuLink to="/profile" label="Profile" activeOnlyWhenExact={false} />
	  	</ul>
	  	<img onClick={() => changeLanguage('en')} src="assets/imgs/en.png" alt="en" className="mr-1 flagEn" />
	  	<img onClick={() => changeLanguage('vi')} src="assets/imgs/vi.png" alt="vi" className="flagVi" />
		<ul className="navbar-nav">
		    <MenuLink to="/signup" label={ t('signup.signup') } activeOnlyWhenExact={false} />
		    <MenuLink to="/login" label={ t('login.login') } activeOnlyWhenExact={false} />
	  	</ul>
	  	<div className="form-inline">
		    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
		    <button className="btn btn-success">Search</button>
		</div>
	</nav>
}
            
export default Menu