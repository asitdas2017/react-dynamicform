import React, {Component} from "react";
import RegistrationForm from "./RegistrationForm";

export default class Registration extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-8"><RegistrationForm/></div>
                <div className="col-lg-4">
                    <div className="sidebar-module sidebar-module-inset">
                        <h4>About</h4>
                        <p>Etiam porta
                            <em>sem malesuada magna</em>
                            mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                            bibendum nulla sed consectetur.</p>
                    </div>
                </div>
            </div>
        );
    }
};