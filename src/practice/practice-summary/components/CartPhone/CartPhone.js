import React from 'react';
import { Link } from 'react-router-dom';
import Phone from './Phone';
import { CartPhoneContext } from '../../context/CartPhoneContext';

export default function CartPhone() {
    const {phones, cart, addToCart} = React.useContext(CartPhoneContext);
    return <div className="container-fluid">
        <div className="row p-2 justify-content-center">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
        <hr />
        <section className="sc-AxhCb ccMvAG py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto my-2 text-center text-title">
                        <h1 className="text-capitalize font-weight-bold">our <strong className="text-blue">phones</strong></h1>
                        <Link to="CartPhone/Cart"><button className="btn btn-primary"><i className="fas fa-cart-plus" aria-hidden="true"></i> My Cart</button></Link>
                    </div>
                </div>
                <div className="row">
                    {phones.map(phone => 
                        <Phone key={phone.id} phone={phone} addToCart={addToCart} cart={cart} />
                    )}
                </div>
            </div>
        </section>
    </div>
}
