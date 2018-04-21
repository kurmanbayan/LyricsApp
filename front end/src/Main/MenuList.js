import React, {Component} from 'react'
import { Accordion } from 'semantic-ui-react'
import MenuItem from './MenuItem'

class MenuList extends Component {

  render() {
    if (this.props.menuListSearch.length > 0) {
      return (
        <Accordion styled style={{"width": "100%"}}>
          {
            this.props.menuListSearch.map((data, index) => {
              return <MenuItem
                        key={index}
                        data={data}
                        removeFromFavourites={this.props.removeFromFavourites}
                        favouritesList={this.props.favouritesList}
                        listOfIngredients={this.props.listOfIngredients}
                        onAddToBadge={this.props.onAddToBadge}
                        onRemoveFromBadge={this.props.onRemoveFromBadge}
                        onAddToShoppingList={this.props.onAddToShoppingList}
                        shoppingList={this.props.shoppingList}
                        onAddToFavourites={this.props.onAddToFavourites}
                    />
            })
          }
        </Accordion>
      )
    }
    else {
      return (
        <h2 align="center" style={{"marginTop": "20px"}} > Recipes not found </h2>
      );
    }
  }
}

export default MenuList
