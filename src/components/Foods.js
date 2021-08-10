import React from 'react';
import Food from './Food';

const avafood = [
    {
        id: 1,
        name: 'Sushi',
        desc: 'Tasts Good!!!',
        price: 46.98
    },
    {
        id: 2,
        name: 'Momo',
        desc: 'Chesee and extra cheese',
        price: 96.00
    },
    {
        id: 3,
        name: 'Burger',
        desc: 'Healthy, meaty, raw',
        price: 79.60
    }
]

const Foods = () => {
    return (
        <>
        {avafood.map((food) => (
            <Food name={food.name} desc={food.desc} price={food.price} key={food.id} />
        ))}
        </>
    )
}

export default Foods;
