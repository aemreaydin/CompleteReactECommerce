import React from 'react';

import { CartItemInfo } from '../../redux/cart/types';
import './CartItem.scss';


const CartItem : React.FC<CartItemInfo> = ({name, price, imageUrl, quantity}) => (
    <div className="cart-item">
        <img className="cart-item__image" src={imageUrl} alt={name}/>
        <div className="cart-item__content">
            <span className="cart-item__name">{name}</span>
            <span className="cart-item__quantity-price">{`${quantity} x $${price}`}</span>
        </div>
    </div>
);

export default CartItem;