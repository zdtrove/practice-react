import React from 'react';
import { Field, reduxForm } from 'redux-form';
import i18n from "i18next";

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

const required = value => value ? undefined : i18n.t('login.required');
const minLength = value => value && value.length < 6 ? `Must be ${6} characters or more` : undefined;
const emailCheck = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

const LoginForm = props => {
  	const { handleSubmit, pristine, reset, invalid, submitting } = props;
  	return (
  		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label>Email address:</label>
				<Field 
					component={renderField} 
					validate={[required, emailCheck]}
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
			<div className="form-group form-check">
				<label className="form-check-label">
					<input className="form-check-input" type="checkbox" /> Remember me
				</label>
			</div>
			<button type="submit" className="btn btn-primary" disabled={invalid || submitting}>Login</button>
			<button type="button" className="btn btn-default" disabled={pristine || submitting} onClick={reset}>Reset</button>
		</form>
  	);
}

export default reduxForm({
  	form: 'LoginForm'
})(LoginForm);