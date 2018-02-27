import React, {Component} from 'react'
import Cart from './Cart'

class ShoppingCartList extends Component {

  render() {
    return (
      <div class="ui piled segments" style={{"marginLeft": "20%", "marginRight": "20%"}}>
        {
          this.props.shoppingList.map((data) => {
            return <Cart data={data}/>
          })
        }
      </div>
    )
  }
}

export default ShoppingCartList
