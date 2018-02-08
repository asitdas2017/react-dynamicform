import React, {Component} from 'react';
import CoustomValidationForm from './CustomValidationForm';
import db_firebase from "./../database/db_firebase";
import index from 'material-ui/TextField';

class CustomValidation extends Component {
    constructor(props){
        super(props);
        this.state = {
            db_data: []
        }
    }

    componentDidMount(){
        const rootRef = db_firebase.database().ref('orderForm');
        rootRef.once('value', snap => {
            let db_data = [];
            snap.forEach((data) => {
                //console.log(data.val());
                db_data.push({
                        name: data.val().name,
                        email: data.val().email,
                        street: data.val().street,
                        country: data.val().country,
                        zipcode: data.val().zipcode
                });                
                this.setState({
                    db_data: db_data
                })
            })
        })        
    }

    render() {
        const dataListArray = [];
        for (let key in this.state.db_data){
            dataListArray.push({
                id: key,
                keyValue: this.state.db_data[key]
            })            
        }
        //console.log(tableArray)
        return (
            <div className="row">
                <div className="col-lg-7">
                    <div className="sidebar-module sidebar-module-inset">
                        <h4>Custom Validation : With dynamic properties</h4>
                        <p>Etiam porta
                            <em>sem malesuada magna</em>
                            mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
                            bibendum nulla sed consectetur.</p>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Country</th>
                                    <th>Zipcode</th>
                                </tr>
                            </thead>
                            <tbody>
                            {dataListArray.map(dataElement => (
                                <tr key={dataElement.id} className="dataList">
                                    <td>{dataElement.keyValue.name}</td>
                                    <td>{dataElement.keyValue.email}</td>
                                    <td>{dataElement.keyValue.street}</td>
                                    <td>{dataElement.keyValue.country}</td>
                                    <td>{dataElement.keyValue.zipcode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="col-lg-5"><CoustomValidationForm/></div>
            </div>
        )
    }
}

export default CustomValidation;