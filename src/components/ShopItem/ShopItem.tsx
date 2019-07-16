import React from 'react';

import './ShopItem.scss';

export interface ShopItemData {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

const ShopItem : React.FC<ShopItemData> = ({name, price, imageUrl}) => (
    <div className="shop-item">
        <img className="shop-item__image" src={imageUrl} alt={name}/>
        <h1 className="shop-item__title">{name}</h1>
        <p className="shop-item__price">{price}</p>
    </div>
)

export default ShopItem;