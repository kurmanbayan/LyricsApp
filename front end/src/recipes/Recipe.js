import React, {Component} from 'react';
import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail";
import RecipeEdit from "./RecipeEdit"
import _ from "lodash";


let currentRecipe = {};



 export default class Recipe extends Component {

    constructor(props){
        super(props);

        this.state = {
            isItemClicked: false,
            isEditing: false,
            isNewRecipe: false,
            recipes: props.menuList,
            currentRecipe: {
                name: "",
                description: "",
                imgPath: "",
                ingredients: [
                    {
                        name: "",
                        amount: null
                    },
                    {
                        name: "",
                        amount: null
                    }
                ]
            }
        };

    }




    render(){
        return(
            <div className="container">
                <div className="row">
                    <RecipeList recipes={this.state.recipes}
                                onClickItem={this.onClickItem.bind(this)}
                                onCreateRecipe = {this.onCreateRecipe.bind(this)}/>

                    {this.state.isEditing ? <RecipeEdit
                            onClickCancel = {this.onClickCancel.bind(this)}
                            currentRecipe = {this.state.currentRecipe}
                        /> : <RecipeDetail
                            recipes={this.state.recipes}
                            isItemClicked={this.state.isItemClicked}
                            currentRecipe = {this.state.currentRecipe}
                            onClickEdit = {this.onClickEdit.bind(this)}
                            onClickDelete = {this.onClickDelete.bind(this)}

                        /> }



                </div>



            </div>
        );
    }

    onCreateRecipe(){
        this.setState({
            isNewRecipe:false
        });
    }



     onClickItem(item){


         this.setState({
             isItemClicked: true,
             currentRecipe: item
         });

     }

     onClickEdit(){
         this.setState({
             isEditing: true
         });
     }

     onClickCancel(){
         this.setState({
             isEditing: false
         });
     }

     onClickDelete(item){


     // _.remove(this.state.recipes,recipe => recipe.name === item );



          console.log("deleted", + item);
     }


    // updateSearch(e){
    //     this.setState({
    //         search: e.target.value.substr(0,20)
    //     });
    // }
    //
    // createContact(name,phone,img){
    //     this.state.contacts.push({
    //         name,
    //         phone,
    //         img
    //     });
    //
    //     this.setState({
    //         contacts: this.state.contacts
    //     });
    //
    //
    // }
    //
    // saveContact(oContactName,nContact){
    //
    //
    //     const newName = nContact.editNameInput.value;
    //     const newPhone = nContact.editPhoneInput.value;
    //     const newCity = nContact.editCityInput.value;
    //     const newGrad = nContact.editGradInput.value;
    //
    //
    //     const foundContact = this.state.contacts.find(contact => contact.name === oContactName);
    //     foundContact.name = newName;
    //     foundContact.phone = newPhone;
    //     foundContact.city = newCity;
    //     foundContact.graduateFrom = newGrad;
    //
    //     this.setState({contacts: this.state.contacts});
    //
    //
    //
    // }
    //
    // deleteContact(contactToDelete){
    //     _.remove(this.state.contacts,contact => contact.name === contactToDelete);
    //
    //     this.setState({
    //         contacts: this.state.contacts
    //     });
    // }
}
