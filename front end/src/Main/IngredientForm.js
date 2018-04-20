import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'

class IngredientForm extends Component {
  constructor(props) {
    super(props);
    let title = props.data ? props.data.name : ''

    this.state = {
      'title': title,
      'quantity': 1,
    }
  }

  handleTitleChange = (e, data) => {
    this.setState({
      title: data.value
    })
  }

  handleCancelClick = () => {
    this.props.data ? this.props.onEditState() : this.props.onOpenChange()
  }

  handleUpdateCreateClick = () => {

    if (this.state.title.length > 0) {
      this.props.onAddToList(this.state.title, this.state.quantity)
    }
    else {
      alert("Ingredient is empty")
    }
  }

  render() {
    const options = []
    this.props.ingredients.map((data, index) => {
      let el = {key: index, text: data.toLowerCase(), value: data}
      return options.push(el)
    })

     return (
       <div className='ui centered card' style={{"width": "80%"}}>
         <div className='content'>
           <div className='ui form'>
             <div className='ui two bottom attached fields'>
               <Dropdown style={{"marginRight": "10px", "marginLeft": "10px", "width": "100%"}} onChange={this.handleTitleChange} placeholder='Ingredient' value={this.state.title} search selection options={options} />
             </div>
             <div className='ui two bottom attached buttons'>
                 <button className='ui primary button' onClick={this.handleUpdateCreateClick}> Add </button>
                 <div className="or"></div>
                 <button className='ui button' onClick={this.handleCancelClick}>Cancel</button>
             </div>
           </div>
         </div>
       </div>
     );
  }
}

export default IngredientForm;
