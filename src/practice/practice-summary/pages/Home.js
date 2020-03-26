import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <h2>List Of Practice</h2>
            </div>
            <hr />
            <div className="row">
                <Link to="search-hotel" className="btn btn-primary m-1">Search Hotel</Link>
                <Link to="cart-phone" className="btn btn-primary m-1">Cart Phone</Link>
            </div>
        </div>
    )
}
