import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<>
					<AppBar title="Success" />
					<h1>Thank you for your submition</h1>
				</>
			</MuiThemeProvider>
		)
	}
}

export default Success;