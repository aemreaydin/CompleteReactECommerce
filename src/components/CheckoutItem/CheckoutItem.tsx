import React from 'react';
import { connect } from 'react-redux';

import { CartItemInfo } from '../../redux/cart/types'
import { removeCartItem, addCartItem, decreaseCartItemQuantity } from '../../redux/cart/actions';

import './CheckoutItem.scss';

interface CheckoutItemAction {
    removeCartItem: typeof removeCartItem;
    addCartItem: typeof addCartItem;
    decreaseCartItemQuantity: typeof decreaseCartItemQuantity;
}

const CheckoutItem : React.FC<CartItemInfo & CheckoutItemAction> = (props) => {
    const {addCartItem, removeCartItem, decreaseCartItemQuantity, ...cartItemInfo } = props;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItemInfo.imageUrl} alt={cartItemInfo.name}/>
        </div>
        <span className="name">{cartItemInfo.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => decreaseCartItemQuantity(cartItemInfo)}>&#10094;</div>
            <span className="value">{cartItemInfo.quantity}</span>
            <div className="arrow" onClick={() => addCartItem(cartItemInfo)}>&#10095;</div>
        </span>
        <span className="price">{cartItemInfo.price}</span>
        <div className="remove-button" onClick={() => removeCartItem(cartItemInfo)}>&#10005;</div>
    </div>
)};

export default connect(null, { addCartItem, removeCartItem, decreaseCartItemQuantity })(CheckoutItem);