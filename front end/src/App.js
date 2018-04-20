import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import MainPage from './Main/MainPage'
import { Button, Icon } from 'semantic-ui-react'
import ShoppingCartList from './ShoppingList/ShoppingCartList'
import Recipe from "./recipes/Recipe";

import Favourite from "./Favourites/Favourite"
import Request from 'superagent'
import LoginForm from "./login/LoginForm";

function Home() {
  return <div> Home page </div>
}

class App extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token')
    this.state = {
      isAuthenticated: token && token.length > 3,
      listOfIngredients: [],
      isToggleLogin: false,
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

    return (


      <Router>
          <div>
              {this.state.isAuthenticated ? <Redirect to={"/"}/> : null}


          <div className="ui small menu">
            <Link to="/" className="item">
              Home
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
                  <div className="ui primary button" onClick={this.onClickUser.bind(this)}>Sign In</div>
              </div>
            </div>

          <Route exact path="/" render={props => <MainPage
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

            {this.state.isToggleLogin ? <LoginForm onSetStateIsToggleLogin = {this.onSetStateIsToggleLogin.bind(this)}
                                                   isToggleLogin = {this.state.isToggleLogin}
                /> : null}


        </div>

      </div>

      </Router>
    );
  }

  onClickUser(){
        this.setState({
            isToggleLogin: true
        })

    }


    onSetStateIsToggleLogin(){
        this.setState({
            isToggleLogin: false
        });


    }


}

export default App;
