import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CheckoutPage.scss';
import { CartItemInfo } from '../../redux/cart/types';
import { AppState } from '../../redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/selectors'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

interface CheckoutBaseProps {
    cartItems: CartItemInfo[];
    total: number;
}
interface CheckoutActionProps {}
type CheckoutProps = CheckoutBaseProps & CheckoutActionProps;

const CheckoutPage: React.FC<CheckoutProps> = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span className="header-title">Product</span>
            </div>
            <div className="header-block">
                <span className="header-title">Description</span>
            </div>
            <div className="header-block">
                <span className="header-title">Quantity</span>
            </div>
            <div className="header-block">
                <span className="header-title">Price</span>
            </div>
            <div className="header-block">
                <span className="header-title">Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckoutItem key={item.id} {...item}/>)
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector<AppState, CheckoutBaseProps>({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);