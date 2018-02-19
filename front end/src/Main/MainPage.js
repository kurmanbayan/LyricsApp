import React, {Component} from 'react'
import './main.css'
import Products from './Products'
import Sidebar from './Sidebar'


class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="sideBar">
            <Sidebar/>
          </div>
        </div>
        <div className="row">
          <div className="products">
            <Products/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
