import React from 'react';
import {SearchHotelProvider} from '../context/SearchHotelContext';
import SearchHotelPage from '../components/SearchHotel';

export default function SearchHotel() {
    return <SearchHotelProvider>
        <SearchHotelPage />
    </SearchHotelProvider>
}
