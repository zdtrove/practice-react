import React from 'react';

export const FormContext = React.createContext({
	getMessageForField: field => [],
});