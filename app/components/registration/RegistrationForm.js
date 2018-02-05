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
                    value: "",
                    valid: false,
                    validation: {
                        rules: {
                            required: true,
                            minLength: 3
                        },
                        errors: {
                            required: "Name field is mandatory",
                            minLength: "Minimum characters is required"
                        }
                    },
                    touched: false,
                    validationError: "asit"
                },
                email: {
                    elementType: "input",
                    elementLabel: "Email Address",
                    elementConfig: {
                        type: "email",
                        placeholder: "Enter your email..."
                    },
                    value: "",
                    valid: false,
                    validation: {
                        rules: {
                            required: true,
                            pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
                        },
                        errors: {
                            required: "Email field is mandatory",
                            pattern: "Please enter proper email format"
                        }                        
                    },
                    touched: false,
                    validationError: ""
                },
                street: {
                    elementType: "input",
                    elementLabel: "Street Address",
                    elementConfig: {
                        type: "text",
                        placeholder: "Enter your road address.."
                    },
                    value: "",
                    valid: false,
                    validation: {
                        rules: {
                            required: true,
                            minLength: 3
                        },
                        errors: {
                            required: "Address is mandatory",
                            minLength: "Minimum characters is required"
                        }
                    },
                    touched: false,
                    validationError: ""
                },
                zipcode: {
                    elementType: "input",
                    elementLabel: "Zip Code",
                    elementConfig: {
                        type: "text",
                        placeholder: "Enter your zip code..."
                    },
                    value: "",
                    valid: false,
                    validation: {
                        rules: {
                            required: true,
                            minLength: 3,
                            pattern: /^([0-9_-]){5,9}$/
                        },
                        errors: {
                            required: "Name field is mandatory",
                            minLength: "Minimum characters is required",
                            pattern: "Please enter proper zipcode"
                        }
                    },
                    touched: false,
                    validationError: ""
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
                    value: "",
                    valid: false,
                    validation: {
                        required: true
                    },
                    touched: false,
                    validationError: ""
                }
            },
            errorForm: {
                emptyError: "Its required field",
                formatError: "The value of the format is not correct"
            }
        };
    }

    validationHandler = (value, validationRules) =>{
        let isValid = true; 
        console.log(validationRules);
        if (validationRules.rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(validationRules.rules.pattern){
            isValid = validationRules.rules.pattern.test(value) && isValid;
        }
        return isValid;
    }

    submitHandler = (e) => {
        e.preventDefault();
        const formData = {};
        for (let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value;
        }
        //console.log(formData);
    };

    inputChangeHandler = (e, inputIdentifire) => {
        const updatedStateOrderForm = {
            ...this.state.orderForm
        }
        const updatedStateOrderFormElement = {
            ...updatedStateOrderForm[inputIdentifire]
        }

        updatedStateOrderFormElement.value = e.target.value;
        updatedStateOrderFormElement.valid = this.validationHandler(updatedStateOrderFormElement.value, updatedStateOrderFormElement.validation);
        //updatedStateOrderFormElement.error = 
        updatedStateOrderForm[inputIdentifire] = updatedStateOrderFormElement;
        //console.log(updatedStateOrderFormElement.valid);
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
        //console.log(formElementsArray);
        return (
            <div className="container asit">
                <form onSubmit={this.submitHandler}>
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
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}