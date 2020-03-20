import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true,
        }
    }

    // formatData = items => {
    //     let tempItems = items.map(item => {
    //         let id = item.sys.id;
    //     });
    // }

    // componentDidMount() {
    //     let rooms = this.formatData(items);
    // }

    render() {
        return <RoomContext.Provider value={{
            ...this.state
        }}>
            {this.props.children}
        </RoomContext.Provider>
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};