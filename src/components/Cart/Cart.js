import React from 'react';
import styled from 'styled-components';
import Modal from '../layouts/Modal';

const CartDetails = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bolder;
`;

const CartActions = styled.div`
    display: flex;
    justify-content: space-around;

    button {
        padding: 10px;
        margin: 20px;
        border-radius: 10px;
        background-color: red;
        color: white;
        border: 1px solid red;
        font-size: 25px;
    }
`;

const Cart = ({ onCloseCart }) => {
    const cartItems = <ul>{[
        {
            id: 1,
            name: 'Sushi',
            amount: 5,
            price: 46.98
        }
    ].map((item) => <li>{item.name}</li>)}</ul>
    return (
        <Modal>
            {cartItems}
            <CartDetails>
                <span>Total Amount</span>
                <span>5</span>
            </CartDetails>
            <CartActions>
                <button onClick={onCloseCart}>Close</button>
                <button>Order</button>
            </CartActions>
        </Modal>
    )
}

export default Cart;
