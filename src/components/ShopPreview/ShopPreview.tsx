import React from 'react';

import ShopItem from '../ShopItem/ShopItem';
import { ShopCategory } from '../../pages/Shoppage/ShopData';

import './ShopPreview.scss';

const ShopPreview : React.FC<ShopCategory> = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
        {
            items
            .filter((item, index) => index < 4)
            .map(({id, ...otherShopItemProps}) => (<ShopItem key={id} id={id} {...otherShopItemProps}/>))
        }
        </div>
    </div>
);

export default ShopPreview;