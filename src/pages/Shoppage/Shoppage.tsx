import React from 'react';
import { connect } from 'react-redux';

import ShopPreview from '../../components/ShopPreview/ShopPreview';
import './ShopPage.scss';
import { ShopCollectionInfo } from '../../redux/shop/types';
import { createStructuredSelector } from 'reselect';
import { AppState } from '../../redux/index';
import { selectShopCollection } from '../../redux/shop/selectors';

interface ShopPageProps {
  collection: ShopCollectionInfo;
}

const ShopPage: React.FC<ShopPageProps> = ({ collection }) => (  
  <div className="shop-page">
    {
      collection.map(({id, ...otherCollectionProps}) => (
        <ShopPreview key={id} id={id} {...otherCollectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector<AppState, ShopPageProps>({
  collection: selectShopCollection
})

export default connect(mapStateToProps)(ShopPage);