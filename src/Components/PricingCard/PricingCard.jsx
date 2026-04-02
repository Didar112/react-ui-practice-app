import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({PricingItem}) => {

    const {name, features}=PricingItem;
    console.log(PricingItem)
    return (
        <div className='border bg-green-600 rounded-2xl p-4'>
            {/* card header */}
            <div >
                <h1 className='text-7xl'>{name}</h1>
                <h4>$: {PricingItem.price}</h4>
            </div>
            {/* card body */}
            <div>
                 <p className='bg-green-500 rounded-2xl p-4'>{PricingItem.description}</p>
                 {
                    features.map((feature, index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)
                 }
            </div>
        </div>
    );
};

export default PricingCard;