import { React, Component } from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from './shop.data.js'


class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collection: SHOP_DATA
    }
  }

  render() {
    const { collection } = this.state
    return(
      <div className="shop-page">
        {
          collection.map( ({ ...otherCollectionProps }) => (
            <CollectionPreview key={otherCollectionProps.id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage