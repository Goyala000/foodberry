import React from 'react';
import Food from './Food';

const avafood = [
    {
        id: 'c1',
        name: 'Sushi',
        desc: 'Tasts Good!!!',
        price: 46.98
    },
    {
        id: 'c2',
        name: 'Momo',
        desc: 'Chesee and extra cheese',
        price: 96.00
    },
    {
        id: 'c3',
        name: 'Burger',
        desc: 'Healthy, meaty, raw',
        price: 79.60
    }
]

const Foods = () => {
    return (
        <>
        {avafood.map((food) => (
            <Food name={food.name} desc={food.desc} price={food.price} key={food.id} id={food.id} />
        ))}
        </>
    )
}

export default Foods;
