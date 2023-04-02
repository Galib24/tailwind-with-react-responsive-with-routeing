import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-300 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
                <span className='text-4xl font-bold text-white'>$</span>
            </h2>
            <h5 className='text-2xl my-6 font-bol text-center'>{price.name}</h5>
        <p className='text-2xl font-extrabold underline'>Features</p>
        {
            price.features.map((feature,idx) => <Feature
            key={idx}
            feature={feature}
            ></Feature>)
        }
        <button className='w-full mt-auto hover:bg-green-700 bg-green-500 py-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCard;