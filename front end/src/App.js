import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MainPage from './Main/MainPage'
import { Button, Icon } from 'semantic-ui-react'

function Recipes() {
  return <div> Recipes </div>
}

function ShoppingList() {
  return <div> Shopping List </div>
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      buttonBadge: 0,
      shoppingList: []
    }
  }

  handleRemoveFromBadge = () => {
    this.setState({
      buttonBadge: this.state.buttonBadge - 1
    })
  }

  handleAddToBadge = () => {
    this.setState({
      buttonBadge: this.state.buttonBadge + 1
    })
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
                                                    onAddToBadge={this.handleAddToBadge}
                                                    onRemoveFromBadge={this.handleRemoveFromBadge}
                                                    shoppingList={this.state.shoppingList}
                                                  />}
          />
          <Route path="/recipes" component={Recipes} />
          <Route path="/shoppingList" component={ShoppingList} />
        </div>
      </Router>
    );
  }
}

export default App;
