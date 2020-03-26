import React from 'react';
import {CartPhoneContext} from '../../context/CartPhoneContext';

export default function MyCartPhone() {
    const {cart} = React.useContext(CartPhoneContext);
    console.log(cart);
    return (
        <div>
            Cart Phone
        </div>
    )
}
