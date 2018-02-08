import React, { Component } from 'react';
import ReduxValidationForm from './ReduxValidationForm';
import { Provider } from 'react-redux';
import store from "./reducer/reducer";

class ReduxValidation extends Component {
    state = {}
    render() { 
        return ( 
            <div className="row">
                <div className="col-lg-6">
                    <div className="sidebar-module sidebar-module-inset">
                        <h4>Redux Form Validation</h4>
                        <p>Etiam porta
                            <em>sem malesuada magna</em>
                            mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                            bibendum nulla sed consectetur.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <Provider store={store}>
                        <ReduxValidationForm />
                    </Provider>
                </div>
            </div>
         )
    }
}
 
export default ReduxValidation;