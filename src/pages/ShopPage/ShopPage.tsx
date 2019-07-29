import React from 'react';
import { connect } from 'react-redux';

import ShopOverview from '../../components/ShopOverview/ShopOverview';

import withSpinner from '../../components/withSpinner/withSpinner';

import { updateCollections } from '../../redux/shop/actions';
import './ShopPage.scss';
import { RouteComponentProps } from 'react-router';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


const ShopOverviewWithSpinner = withSpinner(ShopOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

interface Props {
  updateCollections: typeof updateCollections;
}
type ShopPageProps = RouteComponentProps & Props;

class ShopPage extends React.Component<ShopPageProps, {}> {
  state = {
    loading: true
  };
  // constructor(props: ShopPageProps) {
  //   super(props);
  // }
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collection = convertCollectionsSnapshotToMap(snapshot);
      this.props.updateCollections(collection);
      this.setState({loading: false});
    });
  }

  componentWillUnmount() {
    // this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (  
    <div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => <ShopOverviewWithSpinner isLoading={loading} {...props}/>}/>
      <Route path={`${match.path}/:collectionID`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
    </div>
    );
  }
};

export default connect(null, { updateCollections })(ShopPage);