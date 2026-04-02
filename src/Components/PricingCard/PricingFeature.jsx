import React from 'react';
import { CircleCheckBig } from 'lucide-react';
const PricingFeature = ({feature}) => {
    return (
        <p className='flex pt-2.5'>  <CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeature;