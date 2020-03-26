import React from 'react';

export default function RoomList(props) {
    const {sortedRoom} = props.context;
    if (sortedRoom.length === 0) {
		return <div className="empty-search">
			<h3>unfortunately no rooms matched your search parameters</h3>
		</div>
	}
    return <section className="roomslist">
        <div className="roomslist-center">
            {sortedRoom.map((room, index) =>
                <article key={index} className="room">
                    <div className="img-container">
                        <img src={room.images[0]} alt="single room" />
                        <div className="price-top">
                            <h6>${room.price}</h6>
                            <p>per night</p>
                        </div>
                        <button className="button-primary room-link">Features</button>
                    </div>
                    <p className="room-info">{room.name}</p>
                </article>
            )}
        </div>
    </section>
}
