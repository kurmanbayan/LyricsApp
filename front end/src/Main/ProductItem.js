import React, {Component} from 'react'
import {Glyphicon} from 'react-bootstrap'

class ProductItem extends Component {
  render() {
    return (
      <div className="col-md-10">
          <div className="row">
            <div className="col-md-1">
              <span className="rating"> {this.props.index + 1} </span>
            </div>
            <div className="col-md-1">
              <div className="img-wrap">
                <img src={this.props.data.image} alt='' className='artistImg'/>
              </div>
            </div>
            <div className="col-md-7">
              <div className="song">
                <h3 className="song-name">{this.props.data.song_name}</h3>
                <p className="song-artist">{this.props.data.artist_name}</p>
              </div>
            </div>
            <div className="col-md-1">
              <div className="views">
                <p className="counter"> {this.props.data.views} </p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ProductItem
