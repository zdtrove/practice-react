import React from 'react';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <h1>404 NOT FOUND</h1>
            </div>
            <hr />
            <div className="row justify-content-center">
                <Link to="/" className="btn btn-primary">BACK TO HOME</Link>
            </div> 
        </div>
    )
}
