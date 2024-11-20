import React from 'react';
import { createRoot } from 'react-dom/client';
import Category from './Category';
import Cart from './Cart';
import Product from './Product';
import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }

    addToCart = (product) => {
        this.setState(prevState => ({
            cart: [...prevState.cart, product],
        }));
    }

    removeFromCart = (productId) => {
        this.setState(prevState => ({
            cart: prevState.cart.filter(product => product.id !== productId),
        }));
    }

    render() {
        return (
            <section>
                <Category 
                    products={data} 
                    addToCart={this.addToCart} 
                    cart={this.state.cart}
                />
                <Cart 
                    cart={this.state.cart} 
                    removeFromCart={this.removeFromCart} 
                />
            </section>
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);