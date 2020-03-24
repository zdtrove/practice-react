import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';

export default function Rooms() {
    return <>
        <Header headerClass="roomsheader">
            <Banner title="our room">
                <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Header>
        <RoomContainer />
    </>
}
