import React, { useState } from 'react';
import Cart from './cart/Cart';
import Foods from './Foods';
import Nav from './layouts/Nav';
import CartProvider from './store/CartProvider';

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCart = () => {
        setCartIsShown(true)
    }

    const closeCart = () => {
        setCartIsShown(false)
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onCloseCart={closeCart} />}
            <Nav onShowCart={showCart} />
            <Foods />
        </CartProvider>
    )
}

export default App;
