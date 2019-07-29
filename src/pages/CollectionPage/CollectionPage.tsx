import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { AppState } from '../../redux/index';
import { selectShopCollection } from '../../redux/shop/selectors';
import { CollectionUrlParam, ShopCategory } from '../../types';

import ShopItem from '../../components/ShopItem/ShopItem';

import './CollectionPage.scss';



interface CollectionPageProps extends RouteComponentProps<CollectionUrlParam> {
    collection: ShopCategory;
}

const CollectionPage: React.FC<CollectionPageProps> = ({collection}) => {
    // if(collection) {
        const { title, items } = collection;
        return (
            <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item => <ShopItem key={item.id} item={item}/>)
            }
        </div>
    </div>
        )       
    // } else return null;
};

const mapStateToProps = (state: AppState, ownProps: CollectionPageProps): CollectionPageProps => ({
    ...ownProps,
    collection: selectShopCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);