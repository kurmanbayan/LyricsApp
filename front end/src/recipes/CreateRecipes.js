import React, {Component} from 'react';
import _ from "lodash";

export default class CreateRecipes extends Component {




    renderDetail(){
        if(this.props.isItemClicked){


            );

        }

        return(
            <div className="">
                <h1>Select a Recipe</h1>
            </div>
        );
    }


    render()
    {
        return (
            <div className="col-7">
                {this.renderDetail()}
            </div>



        );
    }






    onClickToShoppingList(){
        console.log(this.props.currentRecipe);
    }




}


