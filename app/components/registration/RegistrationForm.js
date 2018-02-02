import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class RegistrationForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            firstNameError:"",
            lastName: "",
            userName: "",
            email: "",
            password: ""
        };
    }
    formValidation = () => {
        //console.log(this.state.firstName);
        if(this.state.firstName.length < 5){
            this.props.errorText(this.state.firstNameError);
            console.log(this.state.firstName);
            return false;
        }
    }
    handleBlur = (e) => {
        /*this.setState({
          touched: { ...this.state.touched, [field]: true },
        });*/
        this.formValidation();
        //console.log(this.state.firstName);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.onChange({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.formValidation();
        //console.log(this.state);
        //this.props.onSubmit(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: ""
        });
    };

    render() {
        return (
            <div className="container">
                <form>
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <TextField
                                name="firstName"
                                hintText="Please enter your first name"
                                floatingLabelText="First name"
                                value={this.state.firstName}
                                onChange={e => this.handleChange(e)}
                                onBlur={e => this.handleBlur(e)}
                                errorText={this.state.firstNameError}
                            />
                        </div>
                        <div className="form-group col-lg-6">
                            <TextField
                                name="lastName"
                                hintText="Please enter your Last name"
                                floatingLabelText="Last name"
                                value={this.state.lastName}
                                onChange={e => this.handleChange(e)}
                                errorText=""
                            />
                        </div>
                        <div className="form-group col-lg-6">
                            <TextField
                                name="userName"
                                hintText="Please enter your user name"
                                floatingLabelText="User name"
                                value={this.state.userName}
                                onChange={e => this.handleChange(e)}
                                errorText=""
                            />
                        </div>
                        <div className="form-group col-lg-6">
                            <TextField
                                name="email"
                                hintText="Please enter your email address"
                                floatingLabelText="Email address"
                                value={this.state.email}
                                onChange={e => this.handleChange(e)}
                                errorText=""
                            />
                        </div>
                        <div className="form-group col-lg-6">
                            <TextField
                                name="password"
                                hintText="Please enter your password"
                                type="password"
                                floatingLabelText="Password"
                                value={this.state.password}
                                onChange={e => this.handleChange(e)}
                                errorText=""
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <button onClick={e => this.handleSubmit(e)} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}