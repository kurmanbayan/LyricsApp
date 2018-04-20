 import React, {Component} from 'react'

class Ingredient extends Component {
  render() {
    return (
      <a className="ui label" style={{"margin": "5px", "fontSize": "14px"}}>
        {this.props.data.name.toLowerCase()}
        <i onClick={() => this.props.onRemoveIngredient(this.props.data.id)} className="delete icon"></i>
      </a>
    );
  }
}

export default Ingredient;
