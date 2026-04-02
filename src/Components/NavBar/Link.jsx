import React from 'react';

const Link = ({item}) => {
    return (
        <li className='md:mr-10 px-5 hover:text-black hover:bg-slate-700'>
            <a href={item.path}>{item.name}</a>
        </li>
    );
};

export default Link;