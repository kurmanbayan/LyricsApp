import React, {Component} from 'react'

class Ingredient extends Component {
  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='meta'>Quantity</div>
          <div>{this.props.data.number}</div>
          <div className='center aligned description'>
            <h2>{this.props.data.name}</h2>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon' onClick={this.props.onEditState}>
              <i className='edit icon'/>
            </span>
            <button className="ui icon button">
              <i className="trash icon"></i>
            </button>
            <span className='right floated trash icon' onClick={() => this.props.onRemoveIngredient(this.props.data.id)}>
              <i className='trash icon' />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Ingredient;
