import React, {Component} from 'react'
import Cart from './Cart'
import {Dropdown} from 'semantic-ui-react'

class ShoppingCartList extends Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
  }

  handleTitleChange = (e, data) => {
    let value = data.value
    this.setState({
      title: value
    })
  }

  render() {
    const options = []
    this.props.ingredients.map((data, index) => {
      let el = {key: index, text: data, value: data}
      return options.push(el)
    })
    return (
      <div className="column">
        <div className="row" style={{"marginLeft": "30%", "marginRight": "25%"}}>
          <div className="col-md-8">
            <Dropdown onChange={this.handleTitleChange} placeholder='Add Ingredient' value={this.state.title} fluid search selection options={options} />
          </div>
          <div className="col-md-4">
            <button className="ui button" onClick={() => this.props.onAddToShoppingList(this.state.title, false)}>
              Add
            </button>
          </div>
        </div>
        <div className="row">
          <div className="ui piled segments" style={{"marginLeft": "20%", "width": "100%", "marginRight": "20%", "marginTop": "20px"}}>
            {
              this.props.shoppingList.map((data, index) => {
                return <Cart
                        data={data}
                        key={index}
                        onRemoveFromList={this.props.onRemoveFromList}
                        ingredients={this.props.ingredients}
                        shoppingList={this.props.shoppingList}
                      />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingCartList
