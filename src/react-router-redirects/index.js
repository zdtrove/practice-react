import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from 'react-router-dom';

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},
	signout(cb) {
		this.isAuthenticated = false;
		setTimeout(cb, 100);
	}
}

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route {...rest} render={props => 
			fakeAuth.isAuthenticated === true 
				? ( 
					<Component {...props} />
				) : ( 
					<Redirect to={{
						pathname: '/login',
						state: { from: props.location }
						}} 
					/>
				)
			} 
		/>
	)
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

class Login extends React.Component {
	state = { redirectToReferrer: false };
	login = () => {
		fakeAuth.authenticate(() => {
			this.setState({ redirectToReferrer: true });
		});
	}
	render() {
		let { from } = this.props.location.state || { from: { pathname: '/' } };
		let { redirectToReferrer } = this.state;
		
		if (redirectToReferrer === true) return <Redirect to={from} />

		return (
			<div>
				<p>You must log in to view this page at {from.pathname}</p>
				<button onClick={this.login}>Log in</button>
			</div>
		);
	}
}

const AuthButton = () => (
	fakeAuth.isAuthenticated === true
		? <p>
			Welcome! <button onClick={() => ({})}>Sign Out</button>
		  </p>
		: <p>You are not logged in.</p>
)

function ReactRouter() {
	return (
		<Router>
			<div>
				<AuthButton />
				<ul>
					<li>
						<Link to='/public'>Public Page</Link>
					</li>
					<li>
						<Link to='/protected'>Protected Page</Link>
					</li>
				</ul>
				<Route path='/public' component={Public} />
				<Route path='/login' component={Login} />
				<PrivateRoute path='/protected' component={Protected} />
			</div>
		</Router>
	);
}

export default ReactRouter;