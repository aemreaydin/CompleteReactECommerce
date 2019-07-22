import React from 'react';
import { connect } from 'react-redux';

import { CartItemInfo } from '../../redux/cart/types'
import { removeCartItem } from '../../redux/cart/actions';

import './CheckoutItem.scss';

interface CheckoutItemAction {
    removeCartItem: typeof removeCartItem;
}

const CheckoutItem : React.FC<CartItemInfo & CheckoutItemAction> = (props) => {
    const {removeCartItem, ...cartItemInfo } = props;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItemInfo.imageUrl} alt={cartItemInfo.name}/>
        </div>
        <span className="name">{cartItemInfo.name}</span>
        <span className="quantity">{cartItemInfo.quantity}</span>
        <span className="price">{cartItemInfo.price}</span>
        <div className="remove-button" onClick={() => removeCartItem(cartItemInfo)}>&#10005;</div>
    </div>
)};

export default connect(null, { removeCartItem })(CheckoutItem);