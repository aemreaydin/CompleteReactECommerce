import React from 'react';

import ShopItem from '../ShopItem/ShopItem';
import { ShopCategory } from '../../types';

import './ShopPreview.scss';

const ShopPreview : React.FC<ShopCategory> = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
        {
            items
            .filter((item, index) => index < 4)
            .map(item => (<ShopItem key={item.id} item={item}/>))
        }
        </div>
    </div>
);

export default ShopPreview;