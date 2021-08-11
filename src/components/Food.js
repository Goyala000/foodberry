import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import FoodForm from './FoodForm';
import CartContext from './store/CartContext';

const FoodCard = styled.div`
    background-color: rgba(255, 255, 255, .5);
    box-shadow: 0 0 30px rgba(0, 0, 0, .15);
    margin: 30px 100px;
    padding: 10px 30px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
`;

const FoodDesc = styled.div`
    h2 {
        color: red;
    }
`;

const FoodAcion = styled.form`
    display: grid;
    align-items: center;
`;

const CrtBtn = styled.button`
    border-radius: 12px;
    padding: 5px 11px;
    background-color: red;
    color: #fff;
    margin: 2px solid red;
    font-size: 17px;
`;

const Food = ({ id, name, desc, price }) => {
    const amountInputRef = useRef()

    const crtCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        crtCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            return;
        }
        addToCartHandler(enteredAmountNumber)
    }
    return (
        <FoodCard>
            <FoodDesc>
                <h1>{name}</h1>
                <h3>{desc}</h3>
                <h2>${price}</h2>
            </FoodDesc>
            <FoodAcion onSubmit={submitHandler} >
                <FoodForm 
                    ref={amountInputRef}
                    label="Amount" 
                        input={{
                            id: 'amount',
                            type: 'number',
                            min: '1',
                            max: '5',
                            defaultValue: '1'
                        }} />
                <CrtBtn>Add to Cart</CrtBtn>
            </FoodAcion>
        </FoodCard>
    )
}

export default Food;
