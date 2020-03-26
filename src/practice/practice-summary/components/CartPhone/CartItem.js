import React from 'react';

export default function CartItem({phone, increment, decrement, remove}) {
    return <div className="container-fluid">
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2"><img src={phone.img} className="img-fluid" alt="" /></div>
            <div className="col-10 mx-auto col-lg-2 "><span className="d-lg-none">product :</span> {phone.title}</div>
            <div className="col-10 mx-auto col-lg-2 "><strong><span className="d-lg-none">price :</span> ${phone.price}</strong></div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                <div className="d-flex justify-content-center">
                    <div>
                        <span onClick={() => decrement(phone.id)} className="btn btn-black mx-1">-</span>
                        <span className="btn btn-black mx-1">{phone.count}</span>
                        <span onClick={() => increment(phone.id)} className="btn btn-black mx-1">+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
                <div className="cart-icon">
                    <i onClick={() => remove(phone.id)} className="fas fa-trash" aria-hidden="true"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 "><strong>item total : ${phone.total} </strong></div>
        </div>
    </div>
}
