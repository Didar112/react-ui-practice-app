import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({PricingItem}) => {

    const {name, features}=PricingItem;
    console.log(PricingItem)
    return (
        <div className='flex flex-col border bg-green-600 rounded-2xl p-4'>
            {/* card header */}
            <div >
                <h1 className='text-7xl'>{name}</h1>
                <h4>$: {PricingItem.price}</h4>
            </div>
            {/* card body */}
            <div className='flex-1'>
                 <p className='bg-green-500 rounded-2xl p-4'>{PricingItem.description}</p>
                 {
                    features.map((feature, index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)
                 }
            </div>
            <button className="btn btn-block mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;