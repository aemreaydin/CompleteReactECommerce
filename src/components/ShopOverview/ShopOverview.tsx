import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AppState } from '../../redux/index';

import ShopPreview from '../ShopPreview/ShopPreview';
import { ShopCollectionInfo } from '../../redux/shop/types';
import { selectShopCollectionsForPreview } from '../../redux/shop/selectors';



import './ShopOverview.scss';

interface ShopOverviewProps {
    collections: ShopCollectionInfo[];
}

const ShopOverview : React.FC<ShopOverviewProps> = ({ collections }) => (
    <div className="shop-overview">
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <ShopPreview key={id} id={id} {...otherCollectionProps} />
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector<AppState, ShopOverviewProps>({
    collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(ShopOverview);