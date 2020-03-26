import React, { Component } from "react";
import CartPhoneData from '../data/CartPhoneData';

const CartPhoneContext = React.createContext();

class CartPhoneProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: [],
            cart: [],
        }
    }

    getData = () => {
        this.setState({phones: CartPhoneData});
    }

    getPhone = id => {
        let phone = this.state.phones.find(phone => phone.id === id);
        return phone;
    }

    addToCart = id => {
        let tempPhones = [...this.state.phones];
        const index = tempPhones.indexOf(this.getPhone(id));
        const phone = tempPhones[index];
        phone.inCart = true;
        const price = phone.price;
        phone.total = price;
        this.setState({
            phones: tempPhones,
            cart: [...this.state.cart, phone],
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <CartPhoneContext.Provider value={{
                ...this.state,
                addToCart: this.addToCart,
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