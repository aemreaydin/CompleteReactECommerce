import React from 'react';

import ShopOverview from '../../components/ShopOverview/ShopOverview';

import './ShopPage.scss';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage';


const ShopPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (  
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={ShopOverview} />
    <Route path={`${match.path}/:collectionID`} component={CollectionPage} />
  </div>
)};

export default ShopPage;