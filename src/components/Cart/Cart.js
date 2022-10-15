import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveItem(tshirt)}>x</button></p>)
            }
        </div>
    );
};

export default Cart;