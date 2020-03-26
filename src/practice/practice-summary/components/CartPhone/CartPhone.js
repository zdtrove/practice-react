import React from 'react';
import {Link} from 'react-router-dom';

export default function CartPhone() {
    return <div className="container-fluid">
        <div className="row p-2 justify-content-center">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
        <hr />
        Cart Phone
    </div>
}
