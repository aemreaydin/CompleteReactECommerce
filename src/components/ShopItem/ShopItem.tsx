import React from 'react';

import './ShopItem.scss';

import { ShopItemData } from '../../pages/Shoppage/ShopData';

const ShopItem : React.FC<ShopItemData> = ({name, price, imageUrl}) => (
    <div className="shop-item">
        <img className="shop-item__image" src={imageUrl} alt={name}/>
        <div className="shop-item__content">
            <h1 className="shop-item__title">{name}</h1>
            <p className="shop-item__price">{price}</p>
        </div>
    </div>
)

export default ShopItem;