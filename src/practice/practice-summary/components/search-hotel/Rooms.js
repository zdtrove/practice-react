import React from 'react';
import {RoomContext} from '../../context';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';
import Loading from './Loading';

export default function Rooms() {
    const context = React.useContext(RoomContext);
    if (context.loading) {
        return <Loading />
    }
    return <>
        <RoomFilter context={context} />
        <RoomList context={context} />
    </>
}
