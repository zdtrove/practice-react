import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row jumbotron justify-content-center">
                <h1>LIST REACT PROJECT FOR PRACTICE</h1> 
            </div>
            <hr />
            <div className="row">
                <Link to="SearchHotel" className="btn btn-primary m-1">Search Hotel</Link>
                <Link to="CartPhone" className="btn btn-primary m-1">Cart Phone</Link>
            </div>
        </div>
    )
}
