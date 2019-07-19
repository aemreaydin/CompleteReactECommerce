import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addCartItem} from '../../redux/cart/actions';
import { CartItem } from '../../redux/cart/types';

import './ShopItem.scss';

import { ShopItemData } from '../../types';
import CustomButton from '../CustomButton/CustomButton';

interface ShopItemProps {
    item: ShopItemData;
    addCartItem: typeof addCartItem;
}

const ShopItem : React.FC<ShopItemProps> = ({addCartItem, item: {imageUrl, name, price, id}}) => (
    <div className="shop-item">
        <img className="shop-item__image" src={imageUrl} alt={name}/>
        <div className="shop-item__content">
            <h1 className="shop-item__title">{name}</h1>
            <p className="shop-item__price">{price}</p>
        </div>
        <CustomButton className="btn btn--inverted" type="button" onClick={() => addCartItem({id:id, name: name, imageUrl: imageUrl, price: price, quantity: 1})}>Add To Cart</CustomButton>
    </div>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addCartItem: (item: CartItem) => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(ShopItem);