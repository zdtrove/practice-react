import React, {useContext} from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import {RoomContext, RoomConsumer, withRoomConsumer} from '../context';
import Loading from './Loading';

// export default function RoomsContainer() {
// 	const context = useContext(RoomContext);
// 	const {loading, sortedRooms, rooms} = context;
// 	if (loading) {
// 		return <Loading />
// 	}
// 	return <>
//		<RoomsFilter />
//		<RoomsList />
//	</>
// }

// export default function RoomsContainer() {
// 	return <RoomConsumer>
// 		{context => {
// 			const {loading, sortedRooms, rooms} = context;
// 			if (loading) {
// 				return <Loading />
// 			}
// 			return <>
// 				<RoomsFilter rooms={rooms} />
// 				<RoomsList rooms={sortedRooms} />
// 			</>
// 		}}
// 	</RoomConsumer>
// }

function RoomsContainer({context}) {
	const {loading, sortedRooms, rooms} = context;
	if (loading) {
		return <Loading />
	}
	return <>
		<RoomsFilter rooms={rooms} />
		<RoomsList rooms={sortedRooms} />
	</>
}

export default withRoomConsumer(RoomsContainer);