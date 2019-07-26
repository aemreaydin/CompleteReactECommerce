import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

interface StripeButtonProps {
    price: number
}
const StripeButton: React.FC<StripeButtonProps> = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_sUxIbPXkq53ZsghCqHOKlqZb002RhfsC3y';

    const onToken = (token: any) => {
        console.log(token);
        alert("Payment successful.");
    }

    return (
        <StripeCheckout 
            label='Pay Now' 
            name='ECommerce' 
            billingAddress 
            shippingAddress 
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}>
        </StripeCheckout>
    );
}

export default StripeButton;