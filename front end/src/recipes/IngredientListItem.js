import React, {Component} from 'react';
import _ from "lodash";
import {
  FormBuilder,
  AbstractControl,
  Validators,
  FormGroup,
  FormArray,
  FieldGroup,
  FieldControl,
  FieldArray
} from "react-reactive-form"


export default class IngredientListItem extends Component {



    render()
    {
        return (
  //
            <div  className="row" style={{"marginTop": "10px"}}>

                                        <div className="col-8">
                                            <input type="text"
                                                   className="form-control"
                                                   ref="editIngredientName"
                                                   defaultValue={this.props.name}/>
                                        </div>

                                        <div className="col-2">
                                            <input type="number"
                                                   className="form-control"
                                                   ref="editIngredientAmount"
                                                   defaultValue={this.props.amount}/>
                                        </div>

                                        <div className="col-2">
                                            <button onClick={this.props.onClickIngredientDelete.bind(this,this.props)} type="button" className="btn btn-danger">X</button>
                                        </div>
            </div>



        );
    }




}
