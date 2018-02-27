import React, {Component} from 'react'
import { Accordion, Icon} from 'semantic-ui-react'
import MenuIngredientsList from './MenuIngredientsList'

class MenuItem extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <div className="column">
            <div className="row">
              <div className="col-md-1">
                <Icon name='dropdown'/>
              </div>
              <div className="col-md-1">
                <img className="ui mini circular image" src={this.props.data.dish_img} alt=''/>
              </div>
              <div className="col-md-8">
                {this.props.data.dish_name}
              </div>
              <div className="col-md-2">
                <Icon name="clock"/>
                {this.props.data.time}
              </div>
            </div>
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <div> {this.props.data.info.desc} </div>
          <div style={{"fontSize": "20px", "marginTop": "20px"}}> Ingredients: </div>
          <MenuIngredientsList
            data={this.props.data}
            listOfIngredients={this.props.listOfIngredients}
            onAddToBadge={this.props.onAddToBadge}
            onRemoveFromBadge={this.props.onRemoveFromBadge}
            onAddToShoppingList={this.props.onAddToShoppingList}
            shoppingList={this.props.shoppingList}
          />
        </Accordion.Content>
      </div>
    )
  }
}

export default MenuItem
