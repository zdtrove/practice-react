import React from 'react';
import { CartPhoneContext } from '../../context/CartPhoneContext';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';
import CartEmpty from './CartEmpty';

export default function MyCartPhone() {
    const {
        cart, 
        increment,
        decrement,
        remove,
        subTotal,
        tax,
        total,
        clearCart,
    } = React.useContext(CartPhoneContext);
    if (cart.length === 0) {
        return <CartEmpty />
    }
    const cartTitle = ['products', 'name of product', 'price', 'quantity', 'remove', 'total'];
    return <section>
        <div className="row justify-content-center">
            <Link to="/CartPhone"><button className="btn btn-primary">Back To Cart Phone</button></Link>
        </div>
        <hr />
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">your <strong className="text-blue">cart</strong></h1>
            </div>
        </div>
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row ">
                {cartTitle.map((item, index) =>
                    <div key={index} className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">{item}</p>
                    </div>
                )}
            </div>
        </div>
        {cart.map(item => 
            <CartItem 
                key={item.id} 
                phone={item} 
                increment={increment} 
                decrement={decrement}
                remove={remove}
            />
        )}
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <button onClick={() => clearCart()} className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">clear cart</button>
                    <h5><span className="text-title"> subtotal :</span> <strong>$ {subTotal} </strong></h5>
                    <h5><span className="text-title"> tax :</span> <strong>$ {tax} </strong></h5>
                    <h5><span className="text-title"> total :</span> <strong>$ {total} </strong></h5>
                </div>
            </div>
        </div>
    </section>
}
