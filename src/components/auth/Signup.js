import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import SignupForm from './SignupForm';
import { signup } from '../../redux';
import Loading from '../Loading';

class Signup extends React.Component {
	onSubmit = (formValue) => {
		formValue = {
			...formValue,
			headers: {
                'Access-Control-Allow-Origin': '*',
            },
            type: 'profile',
            register_type: 'email',
		}
		this.props.signupProps(formValue);
	}
	render() {
		const { t, auth } = this.props;
	    return <div className="row">
	    	<div className="col-2"></div>
		    <div className="col-8">
		    	<div className="card mt-5">
				  	<div className="card-header bg-primary text-white">{ t('signup.signup') }</div>
				  	<div className="card-body">
				  		{auth.loading === true ? <Loading /> : ''}
				  		<SignupForm onSubmit={this.onSubmit} />
				  	</div>
				</div>
			</div>
			<div className="col-2"></div>
		</div>
	}
}

const SignupTrans = withTranslation()(Signup);

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signupProps: (signupData) => dispatch(signup(signupData))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupTrans);