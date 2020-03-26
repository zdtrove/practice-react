import React from 'react';

export default function Phone({phone, addToCart, cart}) {
    const cartPhone = cart.find(item => item.id === phone.id);
    // error here (not have sollution now)
    let checkInCart = false;
    if (cartPhone !== undefined) {
        checkInCart = true;
    }
    return <div className="sc-AxiKw NFGRt col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
            <div className="img-container p-5">
                <img src={phone.img} alt="phone" className="card-img-top" />
                <button disabled={checkInCart ? "disabled" : ""} className="btn btn-success" onClick={() => addToCart(phone.id)}>
                    <i className="fas fa-cart-plus" aria-hidden="true"></i>
                    {checkInCart ? " In Cart" : " Add To Cart"}
                </button>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0">{phone.title}</p>
                <h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>{phone.price}</h5>
            </div>
        </div>
    </div>
}
