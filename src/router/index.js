import React, { Component } from 'react';
// import Router404Page from './router-404-pages';
// import RouterBasic from './router-basic';
import RouterNestedRoutes from './router-nested-routes';
// import RouterPreventingTransitions from './router-preventing-transitions';
// import RouterRedirects from './router-redirects';
// import RouterUrlParameters from './router-url-parameters';

export default class Main extends Component {
    render() {
        return (
            <div>
                <RouterNestedRoutes />
            </div>
        )
    }
}
