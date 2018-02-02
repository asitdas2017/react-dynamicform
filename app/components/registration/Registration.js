import React, {Component} from "react";
import RegistrationForm from "./RegistrationForm";

export default class Registration extends Component {

    constructor(props){
        super(props);
        this.state = {
            fields: {}
        }
    }

    handleRootSubmit(updatedValue){
        //console.log("Value : ", fields);
        this.setState({
            fields: {
                ...this.state.fields,
                ...updatedValue
            }
        });
    }

    render() {
        return (
            <div>
                <RegistrationForm onChange={fields => this.handleRootSubmit(fields)} />
                <br />
                <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            </div>
        );
    }
};