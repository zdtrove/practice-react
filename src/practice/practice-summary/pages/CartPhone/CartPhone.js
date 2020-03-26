import React from 'react';
import CartPhonePage from '../../components/CartPhone';
import {CartPhoneProvider} from '../../context/CartPhoneContext';

export default function CartPhone() {
    return <CartPhoneProvider>
        <CartPhonePage />
    </CartPhoneProvider>
}
