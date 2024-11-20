import React from 'react';
import Product from './Product';

function Category(props) {
    const { products, addToCart, cart } = props;

    return (
        <section>
            <h2>Category</h2>
            <div>
                {products.map(product => (
                    <Product 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                        isCategory={true} 
                        isInCart={cart.some(item => item.id === product.id)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Category;