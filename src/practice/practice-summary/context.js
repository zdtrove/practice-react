import React, { Component } from 'react';
import dataSearchHotel from './data/search-hotel';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            rooms: [], 
            sortedRoom: [], 
            type: 'all', 
            capacity: 1, 
            price: 0, 
            minPrice: 0, 
            maxPrice: 0, 
            minSize: 0, 
            maxSize: 0, 
            breakfast: false, 
            pets: false,
        }
    }

    formatData = items => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, id, images};
            return room;
        });
        return tempItems;
    }

    handleChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({[name]: value}, this.filterRoom);
    }

    filterRoom = () => {
        let {
            rooms, 
            type, 
            capacity, 
            minSize, 
            maxSize, 
            price, 
            breakfast, 
            pets,
        } = this.state;
        let tempRoom = [...rooms];
        if (type !== 'all') {
            tempRoom = tempRoom.filter(room => room.type === type);
        }
        if (capacity !== 1) {
            tempRoom = tempRoom.filter(room => room.capacity >= capacity);
        }
        tempRoom = tempRoom.filter(room => room.price <= price);
        tempRoom = tempRoom.filter(room => room.size >= minSize && room.size <= maxSize);
        if (breakfast) {
            tempRoom = tempRoom.filter(room => room.breakfast === true);
        }
        if (pets) {
            tempRoom = tempRoom.filter(room => room.pets === true);
        }
        this.setState({
            sortedRoom: tempRoom,
        });
    }

    componentDidMount() {
        let rooms = this.formatData(dataSearchHotel);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
		this.setState({
            loading: false,
            rooms,
            sortedRoom: rooms,
            price: maxPrice,
            maxPrice,
            maxSize,
        });
    }
    
    render() {
        return <RoomContext.Provider value={{
            ...this.state,
            handleChange: this.handleChange,
        }}>
            {this.props.children}
        </RoomContext.Provider>
    }
}

export {
    RoomContext,
    RoomProvider,
};
