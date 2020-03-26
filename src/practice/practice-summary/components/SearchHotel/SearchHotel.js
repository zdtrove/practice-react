import React from 'react';
import {RoomContext} from '../../context/SearchHotelContext';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';
import Loading from './Loading';
import {Link} from 'react-router-dom';

export default function SearchHotel() {
    const context = React.useContext(RoomContext);
    if (context.loading) {
        return <Loading />
    }
    return <div className="container-fluid">
        <div className="row p-2 justify-content-center">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
        <hr />
        <RoomFilter context={context} />
        <RoomList context={context} />
    </div>
}
