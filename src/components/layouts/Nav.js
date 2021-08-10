import React from 'react';
import styled from 'styled-components';

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
    return (
        <Navbar>
            <Title>FOODBERRY</Title>
            <Cart onClick={onShowCart}><i className="fas fa-shopping-cart"></i> ~ 0 </Cart>
        </Navbar>
    )
}

export default Nav;
