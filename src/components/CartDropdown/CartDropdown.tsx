import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';
import { AppState } from '../../redux';
import { CartItemInfo } from '../../redux/cart/types';
import { selectCartItems } from '../../redux/cart/selectors';
import { toggleCartVisibility } from '../../redux/cart/actions';

interface CartDropdownBaseProps {
    cartItems: CartItemInfo[];
}
interface CartDropdownActionProps {
    toggleCartVisibility: typeof toggleCartVisibility;
}

type CartDropdownProps = CartDropdownBaseProps & CartDropdownActionProps;

const CartDropdown : React.FC<CartDropdownProps  & RouteComponentProps> = ({cartItems, history, toggleCartVisibility}) => (
    <div className="cart-dropdown">
        {cartItems.length ?

            <div className="cart-items">
            {
                cartItems.map(item => <CartItem key={item.id} {...item}/>)
            }
            </div>
            :
            <span className="cart-empty">Your cart is empty!</span>
        }
        <CustomButton type="button" className="btn" onClick={() => {
                history.push('/checkout');
                toggleCartVisibility();
            }}>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector<AppState, CartDropdownBaseProps>({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, { toggleCartVisibility })(CartDropdown));