import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from '../../asset/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = (props) => {
  return(
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null, mapDispatchToProps)(CartIcon)