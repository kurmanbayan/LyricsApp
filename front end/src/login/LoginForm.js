import React,{Component} from 'react';
import classNames from 'classnames';
import _ from "lodash";
import {createUser,login} from "../helpers/user";





export default class LoginForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            message: null,
            isLogin: true,
            user: {
                username: "",
                email: "",
                password: "",
                password2: ""
            },
            error: {
                name: null,
                email: null,
                password: null,
                password2: null
            }

        };

        this.formValidation = this.formValidation.bind(this);
    };

    renderAuth(){



        if(this.state.isLogin){
            return(

                <div className="login-form-wrap">
                <h2 className="form-title">Sign In</h2>
                <div className="exit-button" onClick={this.onClickExitButton.bind(this)}>X</div>
                <form onSubmit={this.handleForm.bind(this)}>

                     {
                        this.state.message ? <div className="app-message">
                            <p className={this.state.message.type}>{this.state.message.text}</p>
                        </div> : null
                    }


                    <div className={classNames('form-item',{'error' : _.get(this.state.error, "email")})}>
                        <label    className="first-input" htmlFor="email">Email:</label>
                        <input value={this.state.user.email} onChange={this.onTextFieldChange.bind(this)} placeholder="Your email address" type="email" id="email" name="email" />
                    </div>
                    <div className={classNames('form-item',{'error' : _.get(this.state.error, "password")})}>
                        <label htmlFor="password">Password: </label>
                        <input value={this.state.user.password} onChange={this.onTextFieldChange.bind(this)} placeholder="Your password" type="password" id="password" name="password" />
                    </div>
                    <div className="form-action">
                        <button className="btn btn-success">Sign In</button>
                    </div>
                </form>
                <h5>Don't have an account? <span onClick={this.onClickChangeToSignUp.bind(this)}>Sign Up</span></h5>
            </div>



                );
        }

        return(

            <div className="login-form-wrap">
                <h2 className="form-title">Sign Up</h2>
                <div className="exit-button">X</div>
                <div className="back-button exit-button" onClick={this.onClickBackButton.bind(this)}><i
                    className="fa fa-arrow-left"></i></div>
                <form onSubmit={this.handleForm.bind(this)}>

                     {
                        this.state.message ? <div className="app-message">
                            <a href={this.state.message.type}>{this.state.message.text}</a>
                        </div> : null
                    }


                    <div className={classNames('form-item', {'error': _.get(this.state.error, "username")})}>
                        <label htmlFor="name">Username:</label>
                        <input value={this.state.user.username} onChange={this.onTextFieldChange.bind(this)}
                               placeholder="Your username" type="username" id="username" name="username"/>
                    </div>
                    <div className={classNames('form-item', {'error': _.get(this.state.error, "email")})}>
                        <label htmlFor="email">Email:</label>
                        <input value={this.state.user.email} onChange={this.onTextFieldChange.bind(this)}
                               placeholder="Your email address" type="email" id="email" name="email"/>
                    </div>
                    <div className={classNames('form-item', {'error': _.get(this.state.error, "password")})}>
                        <label htmlFor="password">Password: </label>
                        <input value={this.state.user.password} onChange={this.onTextFieldChange.bind(this)}
                               placeholder="Your password" type="password" id="password" name="password"/>
                    </div>
                    <div className={classNames('form-item', {'error': _.get(this.state.error, "password2")})}>
                        <label htmlFor="password2">Confirm Password: </label>
                        <input value={this.state.user.password2} onChange={this.onTextFieldChange.bind(this)}
                               placeholder="Your password" type="password2" id="password2"
                               name="password2"/>
                    </div>

                    <div className="form-action">
                        <button className="btn btn-success">Sign Up</button>
                    </div>
                </form>
            </div>

        );
    }



    render(){
        return(
            <div className="login-form">
                {this.renderAuth()}
            </div>
        );
    }



    onTextFieldChange(e){
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        this.state.user[fieldName] = fieldValue;

        this.setState({
            user: this.state.user
        });

    }

    onClickChangeToSignUp(){
        this.setState({
            isLogin: false
        });

        console.log(this.state.isLogin)

    }

    onClickBackButton(){
        this.setState({
            isLogin: true
        });
    }

    onClickExitButton(){
        this.props.onSetStateIsToggleLogin();
    }

    formValidation(fieldsToValidate,callback = () => {}){
        const {isLogin,user, error} = this.state;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        const allFields = {

            username: {
                message: "Your name is required",
                validate: () => {
                    const username = _.trim(_.get(user, "username", ""));

                    if(username) {
                        return true;
                    }

                    return false;
                }
            },
            email: {
                message: "Email is not correct",
                validate: ()=>{
                    const email = _.trim(_.get(user,"email",""));
                    if(email && re.test(email)){
                        return true;
                    }

                    return false;

                }
            },
            password: {
                message: "Password should has more than 6 charachters",
                validate: ()=>{
                    const password = _.trim(_.get(user,"password",""));
                    if(password && password.length >= 6){
                        return true;
                    }

                    return false;


                }
            },

            password2: {
                message: "Passwords do not match",
                validate: ()=>{
                    const passwordValue = _.get(user,"password");
                    const password2 = _.get(user, "password2","");

                    if(passwordValue === password2){
                        return true;
                    }

                    return false
                }
            }

        };

        _.each(fieldsToValidate, field => {

            const fieldValidate = _.get(allFields, field);

            if(fieldValidate){
                error[field]  = null;

                const isFieldValid = fieldValidate.validate();

                if(!isFieldValid){

                    error[field] = _.get(fieldValidate,"message");
                }


            }


        });

        this.setState({
            error
        },()=>{


            let isValid = true;
            _.each(error, err=>{
                if(err){
                    isValid = false;
                }
            });

            callback(isValid);
        });

        console.log("After validation ", error);




        console.log("I am going to validate");





    }






    handleForm(e){
        e.preventDefault();

        let fieldNeedToValidate = ['email',"password"];

        if(!this.state.isLogin){
            fieldNeedToValidate = ['username', 'email', "password", "password2"];
        }





        this.formValidation(fieldNeedToValidate,isValid=>{
            console.log("The form is valid?", isValid);

            if(isValid){
                //send to backedn
                if(this.state.isLogin){
                    console.log("LOGIN SIDE");
                    console.log("Email: " + this.state.user.email + "Password: " + this.state.user.password);

                    login(this.state.user.email,this.state.user.password)
                        .then(response => {
                            this.setState({
                                message: {
                                    type: "success",
                                    message: "Login successfully"
                                }

                            });


                            localStorage.setItem('token',response.data.token);
                            this.props.onSetStateIsToggleLogin();
                            console.log(response)
                        })
                        .catch(err => {

                            this.setState({
                                message: {
                                    type: "error",
                                    message: "An error login!"
                                }
                            });

                            console.log(err)
                        })
                }
                else {

                    console.log("Register");

                    console.log(this.state.user);

                    createUser(this.state.user).then(response => {

                        login(response.data.email, response.data.password)
                        .then(response => {
                            this.setState({
                                message: {
                                    type: "success",
                                    message: "Login successfully"
                                }

                            });


                            localStorage.setItem('token',response.data.token);
                            this.props.onSetStateIsToggleLogin();
                            this.props.getUserName(response.data)
                        })
                        .catch(err => {

                            this.setState({
                                message: {
                                    type: "error",
                                    message: "An error login!"
                                }
                            });

                            console.log(err)
                        })




                    })


                }
            }


        });




    }



}