import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown : React.FC = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton type="button" className="btn">Go To Checkout</CustomButton>
    </div>
)

export default CartDropdown;