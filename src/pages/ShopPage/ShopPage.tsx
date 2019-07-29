import React from 'react';
import { connect } from 'react-redux';

import ShopOverview from '../../components/ShopOverview/ShopOverview';

import withSpinner from '../../components/withSpinner/withSpinner';


import { FetchCollectionSuccessActionAsync } from '../../redux/shop/actions';
import './ShopPage.scss';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage';
import { AppState } from '../../redux/index';
import { ShopState } from '../../redux/shop/types';
import { ThunkDispatch } from 'redux-thunk';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching, selectIsCollectionsLoaded } from '../../redux/shop/selectors';
const ShopOverviewWithSpinner = withSpinner(ShopOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

interface Props {
  isFetching: boolean;
  isCollectionLoaded: boolean;
}

interface ActionProps {
  fetchCollections: typeof FetchCollectionSuccessActionAsync;
}
type ShopPageProps = RouteComponentProps & Props & ActionProps;

class ShopPage extends React.Component<ShopPageProps, {}> {

  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { match, isCollectionLoaded } = this.props;
    return (  
    <div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => <ShopOverviewWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
      <Route path={`${match.path}/:collectionID`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>} />
    </div>
    );
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<ShopState, undefined, any>) => ({
  fetchCollections: () => dispatch(FetchCollectionSuccessActionAsync())
});

const mapStateToProps = createStructuredSelector<AppState, Props>({
  isFetching: selectIsFetching,
  isCollectionLoaded: selectIsCollectionsLoaded
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);