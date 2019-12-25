import React from 'react';
import { useTranslation } from 'react-i18next';

function Login() {
	const { t } = useTranslation();
    return <div className="row">
    	<div className="col-3"></div>
	    <div className="col-6">
	    	<div className="card mt-5">
			  	<div className="card-header bg-primary text-white">{ t('login.login') }</div>
			  	<div className="card-body">
			  		<form>
						<div className="form-group">
							<label htmlFor="email">Email address:</label>
							<input type="email" className="form-control" placeholder="Enter email" id="email" />
						</div>
						<div className="form-group">
							<label htmlFor="pwd">Password:</label>
							<input type="password" className="form-control" placeholder="Enter password" id="pwd" />
						</div>
						<div className="form-group form-check">
							<label className="form-check-label">
								<input className="form-check-input" type="checkbox" /> Remember me
							</label>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
			  	</div>
			</div>
		</div>
		<div className="col-3"></div>
	</div>
}
            
export default Login