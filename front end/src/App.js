import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MainPage from './Main/MainPage'
import { Button, Icon } from 'semantic-ui-react'
import ShoppingCartList from './ShoppingList/ShoppingCartList'
import Recipe from "./recipes/Recipe";
import Favourite from "./Favourites/Favourite"
import Request from 'superagent'
import Main from './Home/Main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfIngredients: [],
      favouritesList: [],
      ingredients: [],
      buttonBadge: 0,
      shoppingList: [],
      menuList: [],
      url: 'http://localhost:8000/api/v1/',
      isRecieved: false
    }
  }

  componentDidMount(){
    Request.get(this.state.url).then((response) => {
      let obj = JSON.parse(response.text)
      this.setState({
        menuList: obj.menuList,
        ingredients: obj.ingredients,
        isRecieved: true
      })
    })
  }

  changeRating = (id, rating) => {
    let list = this.state.menuList
    let index = 0
    for(let ind = 0; ind < list.length; ind++) {
      if (list[ind].id === id) {
        index = ind
        break;
      }
    }
    list[index].rating = Math.round((list[index].rating * list[index].voted + parseInt(rating, 10)) / (list[index].voted + 1) * 10) / 10;
    list[index].voted += 1

    Request.post(this.state.url + 'rating/' + id + '/')
    .type("form")
    .send({"voted": list[index].voted})
    .send({"average": list[index].rating})
    .then((callback) => {
      this.setState({
        menuList: list
      })
    })
  }

  addToFavourites = (list) => {
    let favor = this.state.favouritesList
    favor.push(list)
    this.setState({
      favouritesList: favor
    })
  }

  removeFromFavourites = (id) => {
    let favor = this.state.favouritesList
    favor = favor.filter((data) => data.id !== id)
    this.setState({
      favouritesList: favor
    })
  }

  updateIngredientsOfList = (list) => {
    this.setState({
      listOfIngredients: list
    })
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
    if (this.state.isRecieved) {
      return (
        <Router>
          <div>
            <div className="ui small menu">
              <Link to="/" className="item">
                Home
              </Link>
              <Link to="/search" className="item">
                Search
              </Link>
              <Link to="/recipes" className="item">
                Recipes
              </Link>
              <Link to="/favourites" className="item">
                Favourites
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

            <Route exact path="/" component={Main} />

            <Route path="/search" render={props => <MainPage
                                                      typesOfIngredients={this.typesOfIngredients}
                                                      removeFromFavourites={this.removeFromFavourites}
                                                      favouritesList={this.state.favouritesList}
                                                      addToFavourites={this.addToFavourites}
                                                      shoppingList={this.state.shoppingList}
                                                      ingredients={this.state.ingredients}
                                                      onAddToBadge={this.handleAddToBadge}
                                                      onRemoveFromBadge={this.handleRemoveFromBadge}
                                                      onAddToShoppingList={this.handleAddToShoppingList}
                                                      menuList={this.state.menuList}
                                                      listOfIngredients={this.state.listOfIngredients}
                                                      updateIngredientsOfList={this.updateIngredientsOfList}
                                                      onRatingChange = {this.changeRating}
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
            <Route path="/favourites" render={props => <Favourite
                                                            menuList={this.state.menuList}
                                                            favouritesList={this.state.favouritesList}
                                                            onRemoveFromFavourites={this.removeFromFavourites}
                                                          />}
            />
          </div>
        </Router>
      );
    }
    else {
      return (
        <div className="ui active centered inline loader" style={{"marginTop": "20%"}}> </div>
      );
    }
  }
}

export default App;
