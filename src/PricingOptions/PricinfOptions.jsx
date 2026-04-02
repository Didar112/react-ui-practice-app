import React, { use } from 'react';
import PricingCard from '../Components/PricingCard/PricingCard';

const PricinfOptions = ({pricingPromise}) => {

    const pricingData=use(pricingPromise)
    
    const pricingArr=pricingData.pricingPlans

    return (
        <div>
            <h2 className='text-5xl'>Get your membership</h2>
            <div className='grid gap-4 md:grid-cols-3'>
                {
                    pricingArr.map(PricingItem=><PricingCard key={PricingItem.id} PricingItem={PricingItem}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricinfOptions;