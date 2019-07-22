import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';
import { AppState } from '../../redux';
import { CartItemInfo } from '../../redux/cart/types';
import { selectCartItem } from '../../redux/cart/selectors';

interface CartDropdownProps {
    cartItems: CartItemInfo[];
}

const CartDropdown : React.FC<CartDropdownProps> = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item => <CartItem {...item}/>)
            }
        </div>
        <CustomButton type="button" className="btn">Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector<AppState, CartDropdownProps>({
    cartItems: selectCartItem
});

export default connect(mapStateToProps)(CartDropdown);