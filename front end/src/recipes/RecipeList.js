import React, {Component} from 'react';
import _ from "lodash";
import RecipeListItem from "./RecipeListItem";


export default class RecipeList extends Component {

    constructor(props){
        super(props);



    }

    showRecipes() {
        return _.map(this.props.recipes, (recipe, i) =>
            <RecipeListItem

            key={i}
            {...this.props} {...recipe}/>);
    }





    render()
    {
        return (
            <div className="col-xs-5">
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-success">New Recipe</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-12">
                        {this.showRecipes()}
                    </div>
                </div>
            </div>



        );
    }




}
