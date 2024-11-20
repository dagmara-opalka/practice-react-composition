import React from 'react';
import Product from './Product';

function Cart(props) {
    const { cart, removeFromCart } = props;

    return (
        <section>
            <h2>Cart</h2>
            <div>
                {cart.map(product => (
                    <Product 
                        key={product.id} 
                        product={product} 
                        removeFromCart={removeFromCart} 
                        isCart={true} 
                    />
                ))}
            </div>
        </section>
    );
}

export default Cart;