import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';

import { AppState } from '../../redux';
import { CartVisibility } from '../../redux/cart/types';

import './CartDropdown.scss';

interface CartDropdownProps {
    cartVisibility: CartVisibility;
}

const CartDropdown : React.FC<CartDropdownProps> = (props) => {
    return props.cartVisibility ?
    (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton type="button" className="btn btn-submit">Go To Checkout</CustomButton>
        </div>
    ) :
    null;
}

const mapStateToProps = (state: AppState) => ({
    cartVisibility: state.cartReducer.visibility
});

export default connect(mapStateToProps)(CartDropdown);