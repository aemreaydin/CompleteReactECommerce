import React from 'react';
import { ReactComponent as Logo } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import { AppState } from '../../redux';
import { toggleCartVisibility } from '../../redux/cart/actions';
import { selectCartItemCount } from '../../redux/cart/selectors';

import './CartIcon.scss';


interface CartIconProps {
    itemQuantity: number;
    toggleCartVisibility?: typeof toggleCartVisibility;
}

interface StaticCartIconProps {
    additionalClass?: string;
}

const CartIcon : React.FC<CartIconProps & StaticCartIconProps> = (props) => (
    <div className={`cart-icon ${props.additionalClass}`} onClick={props.toggleCartVisibility}>
        <Logo className="cart-icon__image"></Logo>
        <span className="cart-icon__count">{props.itemQuantity}</span>
    </div>
);


const mapStateToProps = createStructuredSelector<AppState, CartIconProps>({
    itemQuantity: selectCartItemCount
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);