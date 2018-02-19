import React, {Component} from 'react'
import randImg from './randomImg.jpeg'
import ProductItem from './ProductItem'
import {ListGroupItem} from 'react-bootstrap'


class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {artist_name: "Drake", song_name: "Dog's plan", views: 10123, image: randImg},
        {artist_name: "Drake", song_name: "Dog's plan", views: 10123, image: randImg},
        {artist_name: "Drake", song_name: "Dog's plan", views: 10123, image: randImg},
        {artist_name: "Drake", song_name: "Dog's plan", views: 10123, image: randImg},
      ]
    }
  }
  render() {
    return (
        this.state.list.map((data, index) => {
          return <ProductItem key={index} data={data} index={index}/>
        })
    )
  }
}

export default ProductList
