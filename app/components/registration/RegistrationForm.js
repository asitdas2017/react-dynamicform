import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Input from './../ui-elements/Input';

export default class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderForm: {
                name: {
                    elementType: "input",
                    elementLabel: "First name",
                    elementConfig: {
                        type: "text",
                        placeholder: "Enter your name..."                        
                    },
                    value: ""
                },
                email: {
                    elementType: "input",
                    elementLabel: "Email Address",
                    elementConfig: {
                        type: "email",
                        placeholder: "Enter your email..."
                    },
                    value: ""
                },
                street: {
                    elementType: "input",
                    elementLabel: "Street Address",
                    elementConfig: {
                        type: "text",
                        placeholder: "Enter your road address.."
                    },
                    value: ""
                },
                zipcode: {
                    elementType: "input",
                    elementLabel: "Zip Code",
                    elementConfig: {
                        type: "text",
                        placeholder: "Enter your zip code..."
                    },
                    value: ""
                },
                country: {
                    elementType: "select",
                    elementLabel: "Country",
                    elementConfig: {
                        options: [
                            {value: null, displayValue: "Select your country" },
                            {value: "india", displayValue: "India" },
                            {value: "usa", displayValue: "United State of America" }
                        ]
                    },
                    value: ""
                }
            }
        };
    }
    submitHandler = (e) => {
        e.preventDefault();
        const formData = {};
        for (let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value;
        }
        console.log(formData);
    };

    inputChangeHandler = (e, inputIdentifire) => {
        const updatedStateOrderForm = {
            ...this.state.orderForm
        }
        const updatedStateOrderFormElement = {
            ...updatedStateOrderForm[inputIdentifire]
        }

        updatedStateOrderFormElement.value = e.target.value;
        updatedStateOrderForm[inputIdentifire] = updatedStateOrderFormElement;

        this.setState({
            orderForm: updatedStateOrderForm
        })
        //[e.target.name]: e.target.value
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                keySide: this.state.orderForm[key]
            });
        }
        return (
            <div className="container asit">
                <form>
                    <div className="row">
                            {
                                formElementsArray.map(formElement => (
                                    <Input
                                        key={formElement.id}
                                        elementLabel={formElement.keySide.elementLabel}
                                        elementType={formElement.keySide.elementType}
                                        elementConfig={formElement.keySide.elementConfig}
                                        value={formElement.keySide.value}
                                        elementChange={(e) => this.inputChangeHandler(e, formElement.id)} />
                                ))
                            }
                        <button onClick={this.submitHandler} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}