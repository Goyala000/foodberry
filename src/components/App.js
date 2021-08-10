import React, { useState } from 'react';
import Cart from './Cart/Cart';
import Foods from './Foods';
import Nav from './layouts/Nav';

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCart = () => {
        setCartIsShown(true)
    }

    const closeCart = () => {
        setCartIsShown(false)
    }

    return (
        <>
            {cartIsShown && <Cart onCloseCart={closeCart} />}
            <Nav onShowCart={showCart} />
            <Foods />
        </>
    )
}

export default App;
