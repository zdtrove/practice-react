import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';

export default class ProductList extends Component {
	state = {
		products: []
	}

    render() {
        return <>
            <div className="py-5">
            	<div className="container">
            		<div className="row">
            			<Title name="our" title="products" />
            		</div>
            	</div>
            </div>
        </>
    }
}
