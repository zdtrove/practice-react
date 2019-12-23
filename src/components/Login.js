import React from 'react';
import { useTranslation } from 'react-i18next';

function Login() {
	const { t } = useTranslation();
    return <>
        <h1>Login</h1>
        {t('react.text01')}
    </>
}
            
export default Login