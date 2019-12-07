import React, { Component } from 'react'

export default class Default extends Component {
    render() {
    	console.log(this.props);
        return <>
            <h3>the request URL 
            <span className="text-danger">
            	{" "}{this.props.location.pathname}
            </span>{" "} was not found</h3>
        </>
    }
}
