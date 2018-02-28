import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class NodemailerEmailForm extends Component {
    render(){
        return (
            <div>
                <TextField
                    hintText="Please enter sender email"
                    fullWidth={true}
                    floatingLabelText="Email address"
                /><br />
                <TextField
                    hintText="Please enter subject"
                    fullWidth={true}
                    floatingLabelText="Subject"
                /><br />
                <TextField
                    fullWidth={true}
                    floatingLabelText="Compose Email"
                    multiLine={true}
                    rows={4}
                    rowsMax={7}
                /><br />
                <RaisedButton label="Send email" primary={true} />
            </div>
        )
    }
}


export default NodemailerEmailForm;