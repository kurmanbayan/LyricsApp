import React, {Component} from 'react'
import './main.css'
import ProductList from './ProductList'

class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <ProductList/>
        </div>
      </div>
    )
  }
}

export default Products
