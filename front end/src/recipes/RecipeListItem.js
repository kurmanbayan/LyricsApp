import React, {Component} from 'react';
import _ from "lodash";

export default class RecipeListItem extends Component {



    render()
    {
        return (
  //
            <a onClick={this.props.onClickItem.bind(this,this.props)}
                className="list-group-item clearfix">
                <div className="pull-left">
                    <h4 className="list-group-item-heading">{this.props.name}</h4>
                    <p className="list-group-item-text">{this.props.description}</p>
                </div>
                <span className="pull-right">
                    <img src={this.props.imgPath} alt={this.props.name} className="img-responsive" style={{height: "50px"}}/>
                </span>
            </a>



        );
    }




}


