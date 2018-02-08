import React, {Component} from "react";

export default class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-8">Test</div>
                <div className="col-lg-4">
                    <div className="sidebar-module sidebar-module-inset">
                        <h4>Home Page</h4>
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