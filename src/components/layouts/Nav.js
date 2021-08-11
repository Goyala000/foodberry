import React, { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../store/CartContext';

const Navbar = styled.nav`
    height: 60px;
    background-color: #111;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 14px;
`;

const Title = styled.h2`
    letter-spacing: 12px;
`;

const Cart = styled.div`
    color: '#fff';
    font-size: 30px;
    cursor: pointer;
`;

const Nav = ({ onShowCart }) => {
    const crtCtx = useContext(CartContext);

    const numOfCartItems = crtCtx.items.reduce((currNum, item) => {
        return currNum + item.amount;
    }, 0)
    return (
        <Navbar>
            <Title>FOODBERRY</Title>
            <Cart onClick={onShowCart}><i className="fas fa-shopping-cart"></i> ~ {numOfCartItems} </Cart>
        </Navbar>
    )
}

export default Nav;
