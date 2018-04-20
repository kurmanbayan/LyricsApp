import React, {Component} from 'react';

export default class RecipeEdit extends Component {

    render()
    {
        return <div className="col-7">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={this.onEditSaveClick.bind(this)}>
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-success" onClick={this.onEditSaveClick.bind(this)}>Save
                                </button>
                                <button className="btn btn-danger" onClick={this.props.onClickCancel}>Cancel</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text"
                                           id="name"
                                           defaultValue={this.props.currentRecipe.name}
                                           ref="editNameInput"
                                           className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="imagePath">Image URL</label>
                                    <input type="text"
                                           id="imagePath"
                                           className="form-control"
                                           defaultValue={this.props.currentRecipe.imgPath}
                                           ref="editImageInput"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <img src={this.props.currentRecipe.imgPath} alt={this.props.currentRecipe.name}
                                     style={{maxHeight: "150px"}} className="img-fluid"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea type="text"
                                              id="description"
                                              ref="editDescriptionInput"
                                              className="form-control"
                                              rows="6">{this.props.currentRecipe.description}</textarea>
                                </div>
                            </div>
                        </div>

                        {/*<div className="row">*/}
                            {/*<div className="col-12">*/}
                                {/*<div className="form-group">*/}
                                    {/*<label htmlFor="description">How to cook</label>*/}
                                    {/*<textarea type="text"*/}
                                              {/*id="description"*/}
                                              {/*ref="editHowtoInput"*/}
                                              {/*className="form-control"*/}
                                              {/*rows="6">{this.props.currentRecipe.howto}</textarea>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}


                        <div className="row">
                            <div className="col-12">
                                {this.props.currentRecipe.ingredients.map((ingredient, index) => {
                                    return <div key={index} className="row" style={{"marginTop": "10px"}}>

                                        <div className="col-8">
                                            <input type="text"
                                                   className="form-control"
                                                   ref="editIngredientName"
                                                   defaultValue={ingredient.name}/>
                                        </div>

                                        <div className="col-2">
                                            <input type="number"
                                                   className="form-control"
                                                   ref="editIngredientAmount"
                                                   defaultValue={ingredient.amount}/>
                                        </div>

                                        <div className="col-2">
                                            <button type="button" className="btn btn-danger">X</button>
                                        </div>
                                    </div>
                                })}


                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>;
    }


    onEditSaveClick(e){
        e.preventDefault();

        console.log(this.props.currentRecipe);
        console.log(this.refs);

        const newRecipe = this.refs ;
        const oldRecipe = this.props.currentRecipe;

        this.props.saveRecipe(oldRecipe,newRecipe);


        // const oldContact = this.name;
        // // const newContact = this.refs;
        // //
        // //
        // //
        // // this.props.saveContact(oldContact,newContact);
        // //
        // // this.setState({
        // //     isEditing: false,
        // //     name: this.state.name,
        // //     phone: this.state.phone,
        // //     city: this.state.city,
        // //     graduateFrom: this.graduateFrom
        // // });

    }




}
