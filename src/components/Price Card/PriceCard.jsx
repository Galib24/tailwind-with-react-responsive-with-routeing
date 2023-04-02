import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div>
            <h2 >
                <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
                <span className='text-4xl'>$</span>
            </h2>
            <h5 className='text-2xl font-bol'>{price.name}</h5>
        </div>
    );
};

export default PriceCard;