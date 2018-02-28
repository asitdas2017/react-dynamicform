import React, {Component} from 'react';
import NodemailerEmailForm from './NodemailerEmailForm';

class NodemailerEmail extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="sidebar-module sidebar-module-inset">
                        <h4>Email form submission using Material UI and Nodemailer</h4>
                        <p>Etiam porta
                            mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                            bibendum nulla sed consectetur.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <NodemailerEmailForm />
                </div>
            </div>
        )
    }
}

export default NodemailerEmail;