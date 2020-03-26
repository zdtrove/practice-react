import React, { Component } from "react";
import CartPhoneData from '../data/CartPhoneData';

const CartPhoneContext = React.createContext();

class CartPhoneProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: [],
            cart: [],
            subTotal: 0,
            tax: 0,
            total: 0,
        }
    }

    getData = () => {
        this.setState({phones: CartPhoneData});
    }

    getPhone = id => {
        let phone = this.state.phones.find(phone => phone.id === id);
        return phone;
    }

    getPhoneCart = id => {
        let phone = this.state.cart.find(phone => phone.id === id);
        return phone;
    }

    addToCart = id => {
        let tempPhones = [...this.state.phones];
        const index = tempPhones.indexOf(this.getPhone(id));
        const phone = tempPhones[index];
        phone.inCart = true;
        phone.total = phone.price;
        phone.count = 1;
        this.setState({
            phones: tempPhones,
            cart: [...this.state.cart, phone],
        }, () => this.addTotal());
        localStorage.setItem('cartPhone', JSON.stringify([...this.state.cart, phone]));
    }

    increment = id => {
        let tempCart = [...this.state.cart];
        const index = tempCart.indexOf(this.getPhoneCart(id));
        const phone = tempCart[index];
        phone.count = phone.count + 1;
        phone.total = phone.total + phone.price;
        this.setState({
            cart: tempCart
        }, () => this.addTotal());
        localStorage.setItem('cartPhone', JSON.stringify(tempCart));
    }

    decrement = id => {
        let tempCart = [...this.state.cart];
        const index = tempCart.indexOf(this.getPhoneCart(id));
        const phone = tempCart[index];
        phone.count = phone.count - 1;
        if (phone.count === 0) {
            this.remove(id);
        } else {
            phone.total = phone.total - phone.price;
            this.setState({
                cart: tempCart
            }, () => this.addTotal());
            localStorage.setItem('cartPhone', JSON.stringify(tempCart));
        }
    }

    remove = id => {
        let tempPhone = [...this.state.phones];
        const index = tempPhone.indexOf(this.getPhone(id));
        let phone = tempPhone[index];
        phone.count = 0;
        phone.total = 0;
        phone.inCart = false;
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(phone => phone.id !== id);
        this.setState({
            cart: tempCart,
            phones: tempPhone,
        }, () => this.addTotal());
        localStorage.setItem('cartPhone', JSON.stringify(tempCart));
    }

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        let tax = subTotal * 0.1;
        tax = parseFloat(tax.toFixed(2));
        const total = subTotal + tax;
        this.setState({
            subTotal: subTotal,
            tax: tax,
            total: total,
        });
        localStorage.setItem('cartTotal', JSON.stringify({subTotal: subTotal, tax: tax, total: total}));
    }

    clearCart = () => {
        this.setState({
            cart: [],
        }, () => {
            // error here (not have sollution now)
            this.addTotal();
        });
        localStorage.setItem('cartPhone', JSON.stringify([]));
    }

    componentDidMount() {
        this.getData();
        if (localStorage.getItem('cartPhone') !== null) {
            const localCart = JSON.parse(localStorage.getItem('cartPhone'));
            this.setState({
                cart: localCart,
            });
        }
        if (localStorage.getItem('cartTotal') !== null) {
            const localCartTotal = JSON.parse(localStorage.getItem('cartTotal'));
            this.setState({
                subTotal: localCartTotal.subTotal,
                tax: localCartTotal.tax,
                total: localCartTotal.total,
            });
        }
    }

    render() {
        return (
            <CartPhoneContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                remove: this.remove,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </CartPhoneContext.Provider>
        );
    }
}

export {
    CartPhoneContext, 
    CartPhoneProvider,
};