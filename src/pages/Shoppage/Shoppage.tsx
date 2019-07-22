import React from 'react';

import ShopPreview from '../../components/ShopPreview/ShopPreview';
import { ShopCategory } from '../../types';
import { ShopCollection } from './ShopData';
import './ShopPage.scss';

interface ShopPageProps {}
interface ShopPageState {
    collections: ShopCategory[];
}

class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
    constructor(props: ShopPageProps) {
        super(props);

        this.state = {
            collections: ShopCollection
        }
    }

    render() {
      const {collections} = this.state;
      return (
          <div className="shop-page">
            {
              collections.map(({id, ...otherCollectionProps}) => (
                <ShopPreview key={id} id={id} {...otherCollectionProps} />
              ))
            }
          </div>
      );
    }
}

export default ShopPage;