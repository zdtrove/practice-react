import React from 'react';
import {Link} from 'react-router-dom';

export default function CartEmpty() {
    return <div className="container-fluid">
        <div className="row justify-content-center">
            <h1>Your Cart Is Currently Empty</h1>
        </div>
        <hr />
        <div className="row justify-content-center">
            <Link to="/CartPhone"><button className="btn btn-primary">Back To Cart Phone</button></Link>
        </div>
    </div>
}
