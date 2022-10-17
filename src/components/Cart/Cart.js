import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>Buy Something</p>
    }
    else if(cart.length === 1){
        message = <p>Buy More</p>
    }
    else{
        message = <p>Thank You For Shopping</p>
    }
    return (
        <div>
            <h2 className={`summery`}>Order Summery</h2>
            <h5>Order Quantity: <span className={`font-size ${cart.length === 0 ? `red` : `green`}`}>{cart.length}</span></h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveItem(tshirt)}>x</button></p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>3 Jon ke gift diba?</p> : <p>Kino Kino</p>
            }
            {
                cart.length === 2 && <p>Double Item</p>
            }
            {
                cart.length === 4 || <p>4ta item hoy nai</p>
            }
        </div>
    );
};

export default Cart;