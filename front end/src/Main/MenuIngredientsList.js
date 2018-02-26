import React, {Component} from 'react'
import { Label } from 'semantic-ui-react'

class MenuIngredientsList extends Component {

  isInFridge = (product) => {
    let list = this.props.listOfIngredients
    let state = false
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === product) {
        state = true
        break
      }
    }
    return state
  }

  render() {
    return (
      <div className="ui card">
          {
            this.props.data.ingredients.map((item, index) => {
              if (this.isInFridge(item)) {
                return <div className="content" key={index}>
                          <div className="meta">
                            <div style={{"marginBottom": "20px"}}> {item} </div>
                            <Label style={{"marginLeft": "20px"}} key={index} as='a' tag> In fridge </Label>
                          </div>
                          <div className="extra content">
                            <div className="ui basic red button">Decline</div>
                          </div>
                        </div>
              }
              else {
                return <div className="content" key={index}>
                          <div className="header">
                            {item}
                          </div>
                       </div>
              }
            })
          }
      </div>
    )
  }
}

export default MenuIngredientsList
