import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import LoginForm from './LoginForm';
import { login } from '../../redux';
import Loading from '../Loading';

class Login extends React.Component {
	onSubmit = (formValue) => {
		formValue = {
			...formValue,
			headers: {
                'Access-Control-Allow-Origin': '*',
            },
            type: 'profile',
            login_type: 'email',
		}
		this.props.loginProps(formValue);
	}
	componentDidMount() {
	    let isLogin = localStorage.getItem('login');
		if (isLogin === 'login') {
			this.props.history.push('profile');
		}
	}

	render() {
		const { t, auth } = this.props;
	    return <div className="row">
	    	<div className="col-2"></div>
		    <div className="col-8">
		    	<div className="card mt-5">
				  	<div className="card-header bg-primary text-white">{ t('login.login') }</div>
				  	<div className="card-body">
				  		{auth.loading === true ? <Loading /> : ''}
				  		<LoginForm onSubmit={this.onSubmit} />
				  	</div>
				</div>
			</div>
			<div className="col-2"></div>
		</div>
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loginProps: (loginData) => dispatch(login(loginData))
	}
}

const LoginTrans = withTranslation()(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginTrans);