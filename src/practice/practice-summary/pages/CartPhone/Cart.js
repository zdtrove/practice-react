import React from 'react';
import {CartPhoneProvider} from '../../context/CartPhoneContext';
import Cart from '../../components/CartPhone/Cart';

export default function CartPage() {
    return <CartPhoneProvider>
        <Cart />
    </CartPhoneProvider>
}
