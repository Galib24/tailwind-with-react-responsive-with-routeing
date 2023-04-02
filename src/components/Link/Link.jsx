import React from 'react';

const Link = ({router}) => {
    return (
        <div>
            <li className='mr-12 hover:bg-purple-600'>
                <a href={router.path}>{router.name}</a>
            </li>
        </div>
    );
};

export default Link;