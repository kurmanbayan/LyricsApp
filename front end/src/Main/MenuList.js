import React, {Component} from 'react'
import { Accordion } from 'semantic-ui-react'
import MenuItem from './MenuItem'

class MenuList extends Component {

  render() {
    return (
      <Accordion styled style={{"width": "100%"}}>
        {
          this.props.menuListSearch.map((data, index) => {
            return <MenuItem
                    key={index}
                    data={data}
                    listOfIngredients={this.props.listOfIngredients}
                    onAddToBadge={this.props.onAddToBadge}
                    onRemoveFromBadge={this.props.onRemoveFromBadge}
                    onAddToShoppingList={this.props.onAddToShoppingList}
                  />
          })
        }
      </Accordion>
    )
  }
}

export default MenuList
