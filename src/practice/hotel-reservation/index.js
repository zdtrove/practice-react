import React from 'react';
import './index.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import {RoomProvider} from './context';

export default function HotelReservation() {
    return <>
        <RoomProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/rooms" component={Rooms} />
                    <Route exact path="/rooms/:slug" component={SingleRoom} />
                    <Route component={Error} />
                </Switch>
            </Router> 
        </RoomProvider>
    </>
}
