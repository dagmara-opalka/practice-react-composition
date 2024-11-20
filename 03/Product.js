import React from 'react';

function Product(props) {
    const { product, addToCart, removeFromCart, isCategory, isCart, isInCart } = props;

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {isCategory && !isInCart && (
                <button onClick={handleAddToCart}>Dodaj do koszyka</button>
            )}
            {isCategory && isInCart && (
                <button disabled>W koszyku</button>
            )}
            {isCart && (
                <button onClick={handleRemoveFromCart}>Usuń z koszyka</button>
            )}
        </div>
    );
}

export default Product;