import React, { useContext } from 'react';
import styled from 'styled-components';

import Modal from '../layouts/Modal';
import CartContext from '../store/CartContext';

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

const CartList = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #111;
    margin-bottom: 8px;

    p {
        font-size: 19px;
        color: red;
        padding-bottom: 12px;
    }
`;

const CartInfo = styled.div`
    h3 {
        margin-bottom: 5px;
        
    }
    span {
        border: 2px solid #111;
        padding: 2px 8px;
        margin-left: 18px;
        border-radius: 12px;
    }
`;

const CartBtn = styled.div`
    button {
        padding: 5px 15px;
        border: 2px solid red;
        margin: 11px;
        background-color: #fff;
        font-size: 20px;
        cursor: pointer;
        border-radius: 10px;

        &:hover {
            background-color: red;
            color: #fff
        }
    }
`;


const CardView = styled.div`
max-height: 20rem;
    overflow: scroll;

    &::-webkit-scrollbar-track-color {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #000000;
	    border: 2px solid #555555;
        border-radius: 12px;
    }
`;

const Cart = ({ onCloseCart }) => {
    const crtCtx = useContext(CartContext);

    const totalAmount = `$${crtCtx.totalAmount.toFixed(2)}`;
    const hasItems = crtCtx.items.length > 0;

    const cartAddItem = item => {
        crtCtx.addItem({...item, amount: 1});
    }
    
    const cartRemoveItem = id => {
        crtCtx.removeItem(id);
        console.log(id)
    }

    return (
        <Modal>
            <CardView>
            {crtCtx.items.map((item) => (
                <CartList>
                    <CartInfo>
                        <h3>{item.name}</h3>
                        <p>${item.price}<span>x{item.amount}</span></p>
                    </CartInfo>
                    <CartBtn>
                        <button onClick={(e) => crtCtx.removeItem(item.id)}><i className="fas fa-minus"></i></button>
                        <button onClick={(e) => crtCtx.addItem({...item, amount: 1})}><i className="fas fa-plus"></i></button>
                    </CartBtn>
                </CartList>
            ))}
            </CardView>
            <CartDetails>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </CartDetails>
            <CartActions>
                <button onClick={onCloseCart}>Close</button>
                {hasItems && <button>Order</button>}
            </CartActions>
            
        </Modal>
    )
}

export default Cart;
