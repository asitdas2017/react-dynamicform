import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Input from './../ui-elements/Input';
import db_firebase from "./../database/db_firebase";
import { Redirect, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class CoustomValidationForm extends Component {

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
                            minLength: "Minimum 3 characters is required"
                        },
                        setError: ""
                    },
                    touched: false
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
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                        },
                        errors: {
                            required: "Email field is mandatory",
                            pattern: "Please enter proper email format"
                        },
                        setError: ""
                    },
                    touched: false
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
                            minLength: 8
                        },
                        errors: {
                            required: "Address is mandatory",
                            minLength: "Minimum 8 characters is required"
                        },
                        setError: ""
                    },
                    touched: false
                },                
                country: {
                    elementType: "select",
                    elementLabel: "Country",
                    elementConfig: {
                        options: [
                            {value: null, displayValue: "Select your country"}, 
                            {value: "india", displayValue: "India"}, 
                            {value: "usa", displayValue: "United State of America"},
                            {value: "canada", displayValue: "Canada"},
                            {value: "australia", displayValue: "Australia"},
                            {value: "uk", displayValue: "United Kingdom"},
                            {value: "europe", displayValue: "Europe"}
                        ]
                    },
                    value: "",
                    valid: true,
                    validation: {
                        rules: {
                            required: true
                        },
                        errors: {
                            required: "Please select the country from the dropdown"
                        },
                        setError: ""
                    },
                    touched: false
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
                        },
                        setError: ""
                    },
                    touched: false
                }
            },
            formIsValid: false,
            fireRedirect: false

        };
    }
    /*
    componentDidMount(){        
        const rootRef = db_firebase.database().ref().child('react');
        const speedRef = rootRef.child('speed');
        speedRef.on('value', snap => {
            this.setState({
                speed: snap.val()
            })
        })
    }
    */
    validationHandler = (value, validationRules) => {
        let isValid = true;

        if (validationRules.rules.required) {
            isValid = value.trim() !== '' && isValid;
            validationRules.setError = (isValid) ? "" : validationRules.errors.required
        }
        if (validationRules.rules.minLength) {
            isValid = value.length >= validationRules.rules.minLength && isValid;
            validationRules.setError = (isValid) ? "" : validationRules.errors.minLength
        }
        if (validationRules.rules.pattern) {
            isValid = validationRules.rules.pattern.test(value) && isValid;
            validationRules.setError = (isValid) ? "" : validationRules.errors.pattern
        }
        return isValid;
    }

    submitHandler = (e) => {
        e.preventDefault();
        const formData = {};
        for (let key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value;
        }
        db_firebase.database().ref().child('orderForm').push(formData).then(() => {
           alert("Successfully stored the data");
           this.setState({ fireRedirect: true })         
        });
        //console.log(formData);
    };

    changeHandler = (e, inputIdentifire, elementTouch) => {
        const updatedStateOrderForm = {
            ...this.state.orderForm
        }
        const updatedStateOrderFormElement = {
            ...updatedStateOrderForm[inputIdentifire]
        }

        updatedStateOrderFormElement.value = e.target.value;
        if (elementTouch){
            updatedStateOrderFormElement.valid = this.validationHandler(updatedStateOrderFormElement.value, updatedStateOrderFormElement.validation);
        }
        updatedStateOrderForm[inputIdentifire] = updatedStateOrderFormElement;

        let formIsValid = true;
        for(let inputIdentifire in updatedStateOrderForm){
            formIsValid = updatedStateOrderForm[inputIdentifire].valid && formIsValid;
        }

        this.setState({
            orderForm: updatedStateOrderForm,
            formIsValid: formIsValid
        })
    }
    blurHandler = (e, inputIdentifire, elementTouch) => {
        const updatedStateOrderForm = {
            ...this.state.orderForm
        }
        const updatedStateOrderFormElement = {
            ...updatedStateOrderForm[inputIdentifire]
        }
        updatedStateOrderFormElement.valid = this.validationHandler(updatedStateOrderFormElement.value, updatedStateOrderFormElement.validation);
        updatedStateOrderFormElement.touched = true;
        updatedStateOrderForm[inputIdentifire] = updatedStateOrderFormElement;
        this.setState({
            orderForm: updatedStateOrderForm
        })
        //console.log(updatedStateOrderForm);
    }
    render() {
        const formElementsArray = [];
        const { fireRedirect } = this.state;
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key, 
                keySide: this.state.orderForm[key]
            });
        }
        //console.log(formElementsArray);
        return (
            <form onSubmit={this.submitHandler}>
                {formElementsArray.map(formElement => (<Input
                    key={formElement.id}
                    elementLabel={formElement.keySide.elementLabel}
                    elementType={formElement.keySide.elementType}
                    elementConfig={formElement.keySide.elementConfig}
                    value={formElement.keySide.value}
                    touched={formElement.keySide.touched}
                    inValid={!formElement.keySide.valid}
                    elementError={formElement.keySide.validation.setError}
                    elementChange={(e) => this.changeHandler(e, formElement.id, formElement.keySide.touched)}
                    elementBlur={(e) => this.blurHandler(e, formElement.id, formElement.keySide.touched)} />
                ))}
                <button className="btn btn-primary" disabled={!this.state.formIsValid}>Submit</button>
                <span> {JSON.stringify(this.state.formIsValid, null, 2)}</span>
                {fireRedirect && (
                    <Redirect to={'/'}/>
                )}
            </form>
        )
    }
}