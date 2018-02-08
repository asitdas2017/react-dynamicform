import React, {Component} from 'react';
import CoustomValidationForm from './CustomValidationForm';

class CustomValidation extends Component {
    state = {}
    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="sidebar-module sidebar-module-inset">
                        <h4>Custom Validation : With dynamic properties</h4>
                        <p>Etiam porta
                            <em>sem malesuada magna</em>
                            mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                            bibendum nulla sed consectetur.</p>
                    </div>
                </div>
                <div className="col-lg-6"><CoustomValidationForm/></div>
            </div>
        )
    }
}

export default CustomValidation;