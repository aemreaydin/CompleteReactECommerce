import React from 'react';
import { ReactComponent as Logo } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../redux';
import { CartVisibility } from '../../redux/cart/types';
import { toggleCartVisibility } from '../../redux/cart/actions';

import './CartIcon.scss';


interface CartIconProps {
    // itemCount: number;
    cartDropdownVisibility: CartVisibility
    toggleCartVisibility: typeof toggleCartVisibility;
    additionalClass?: string;
}

const CartIcon : React.FC<CartIconProps> = (props) => (
    <div className={`cart-icon ${props.additionalClass}`} onClick={props.toggleCartVisibility}>
        <Logo className="cart-icon__image"></Logo>
        <span className="cart-icon__count">0</span>
    </div>
);


const mapStateToProps = (state: AppState) => ({
    cartDropdownVisibility: state.cartReducer.visibility,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);