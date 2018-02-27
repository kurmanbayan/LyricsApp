import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MainPage from './Main/MainPage'
import { Button, Icon } from 'semantic-ui-react'
import ShoppingCartList from './ShoppingList/ShoppingCartList'
import Recipe from "./recipes/Recipe";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        "eggs",
        "meat",
        "apple",
        "yoghurt",
        "milk",
        "nuts",
        "orange",
      ],
      buttonBadge: 0,
      shoppingList: [],
        menuList: [
            {
                name: "Tasty Schnitzel",
                description: "A super-tasty Schnitzel - just awesome!",
                imgPath: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
                time: "1 hour",
                ingredients: [
                    {
                        name: "Meat",
                        amount: 1
                    },
                    {
                        name: "French fries",
                        amount: 10
                    }
                ]
            }
        ]
    }
  }


  handleRemoveFromBadge = () => {
    this.setState({
      buttonBadge: this.state.buttonBadge - 1
    })
  }

  handleRemoveFromList = (product) => {
    let array = this.state.shoppingList
    array = array.filter((data) => data.toLowerCase() !== product.toLowerCase())
    this.handleRemoveFromBadge()
    this.setState({
      shoppingList: array
    })
  }

  handleAddToBadge = () => {
    this.setState({
      buttonBadge: this.state.buttonBadge + 1
    })
  }

  handleAddToShoppingList = (product, state) => {
    let list = this.state.shoppingList
    const check = list.filter((data) => data.toLowerCase() === product.toLowerCase())
    if (check.length === 0) {
        list.push(product)
        this.handleAddToBadge()
        this.setState({
          shoppingList: list
        })
    }
    else {
      if (state) {
        this.handleRemoveFromList(product)
        this.handleRemoveFromBadge()
      }
    }
  }


  render() {
    return (
      <Router>
        <div>
          <div className="ui small menu">
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/recipes" className="item">
              Recipes
            </Link>
            <div className="right menu">
              <div className="ui dropdown item">
                Language <i className="dropdown icon"></i>
                <div className="menu">
                  <a className="item">English</a>
                  <a className="item">Russian</a>
                  <a className="item">Spanish</a>
                </div>
              </div>
              <div className="item">
                <Button.Group>
                  <Link to="/shoppingList">
                    <Button animated='vertical'>
                       <Button.Content hidden>Shop</Button.Content>
                       <Button.Content visible>
                         <Icon name='shop' />
                       </Button.Content>
                     </Button>
                   </Link>
                   <Button style={{"fontSize": "12px"}} disabled> {this.state.buttonBadge} </Button>
                 </Button.Group>
              </div>
              <div className="item">
                  <div className="ui primary button">Sign In</div>
              </div>
            </div>
          </div>

          <Route exact path="/" render={props => <MainPage
                                                    shoppingList={this.state.shoppingList}
                                                    ingredients={this.state.ingredients}
                                                    onAddToBadge={this.handleAddToBadge}
                                                    onRemoveFromBadge={this.handleRemoveFromBadge}
                                                    onAddToShoppingList={this.handleAddToShoppingList}
                                                        menuList={this.state.menuList}
                                                  />}
          />
          <Route path="/recipes" render={(props) => <Recipe menuList={this.state.menuList}/> }  />
          <Route path="/shoppingList" render={props => <ShoppingCartList
                                                          ingredients={this.state.ingredients}
                                                          onRemoveFromList={this.handleRemoveFromList}
                                                          shoppingList={this.state.shoppingList}
                                                          onAddToShoppingList={this.handleAddToShoppingList}
                                                        />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
