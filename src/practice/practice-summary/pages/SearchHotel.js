import React from 'react';
import {Link} from 'react-router-dom';
import Rooms from '../components/search-hotel/Rooms';

export default function Home() {
    return <div className="container-fluid">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        <Rooms />
    </div>
}
