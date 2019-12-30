import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'Required';
const minLength = value => value && value.length < 6 ? `Must be ${6} characters or more` : undefined;
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const passwordConfirm = (value, allValues) => value !== allValues.password ? 'Passwords don\'t match' : undefined;
const renderField = ({
  	input,
  	label,
  	type,
  	className,
  	meta: { touched, error }
}) => (
	<div>
  		<input {...input} placeholder={label} type={type} className={touched && error ? "error-wrapp form-control" : className} />
  		{touched && (error && <span className="error">{error}</span>)}
	</div>
);

const SignupForm = props => {
  	const { handleSubmit, pristine, reset, invalid, submitting } = props;
  	return (
  		<form onSubmit={handleSubmit}>
  			<div className="form-group">
				<label>Username:</label>
				<Field 
					component={renderField} 
					validate={[required, minLength]}
					type="text" 
					name="name"
					label="Enter Username"
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label>Email address:</label>
				<Field 
					component={renderField} 
					validate={[required, email]}
					type="email" 
					name="email"
					label="Enter Email"
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label>Password:</label>
				<Field 
					component={renderField} 
					validate={[required, minLength]}
					type="password" 
					name="password" 
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label>Password Confirm:</label>
				<Field 
					component={renderField} 
					validate={[required, minLength, passwordConfirm]}
					type="password" 
					name="password_confirmation" 
					className="form-control"
				/>
			</div>
			<button type="submit" className="btn btn-primary" disabled={invalid || submitting}>Signup</button>
			<button type="button" className="btn btn-default" disabled={pristine || submitting} onClick={reset}>Reset</button>
		</form>
  	);
}

export default reduxForm({
  	form: 'SignupForm'
})(SignupForm);