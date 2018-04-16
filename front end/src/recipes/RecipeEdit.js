import React, {Component} from 'react';

export default class RecipeEdit extends Component {

    render()
    {
        return (
            <div className="col-xs-7">
                <div className="row">
                    <div className="col-xs-12">
                        <form>
                            <div className="row">
                                <div className="col-xs-12">
                                    <button className="btn btn-success">Save</button>
                                    <button className="btn btn-danger" onClick={this.props.onClickCancel}>Cancel</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text"
                                                id="name"
                                               defaultValue={this.props.currentRecipe.name}
                                               ref="nameInput"
                                        className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="imagePath">Image URL</label>
                                        <input type="text"
                                               id="imagePath"
                                               className="form-control"
                                               defaultValue={this.props.currentRecipe.imgPath}
                                               ref="imgInput"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12">
                                    <img src={this.props.currentRecipe.imgPath} alt={this.props.currentRecipe.name}  className="img-responsive"/>
                                   </div>
                                </div>

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea type="text"
                                        id="description"
                                        ref="descInput"
                                        className="form-control"
                                        rows="6">{this.props.currentRecipe.description}</textarea>
                                    </div>
                                </div>
                             </div>


                            <div className="row">
                                <div className="col-xs-12">
                                    {this.props.currentRecipe.ingredients.map((ingredient, index)=>{
                                        return <div key={index} className="row" style={{"margin-top": "10px"}}>

                                        <div className="col-xs-8">
                                        <input type="text"
                                        className="form-control"
                                        ref="ingredientName"
                                        defaultValue={ingredient.name}/>
                                        </div>

                                        <div className="col-xs-2">
                                        <input type="number"
                                        className="form-control"
                                        ref="ingredientaAmount"
                                        defaultValue={ingredient.amount}/>
                                        </div>

                                        <div className="col-xs-2">
                                        <button type="button" className="btn btn-danger">X</button>
                                        </div>
                                        </div>
                                    })}

                                    <hr/>

                                        <div className="row">
                                            <div className="col-xs-12">
                                                    <button type="button" className="btn btn-success" >Add Ingredient</button>
                                            </div>
                                        </div>
                                </div>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        );
    }




}
