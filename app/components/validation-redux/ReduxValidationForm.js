import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Minimum be 2 characters or more'
    }
    return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className={touched && error ? 'form-group has-error' : 'form-group'}>
        <label className="control-label">{label}</label>
        <input {...input} placeholder={label + "..."} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>))}
    </div>
)


let ReduxValidationForm = ({ handleSubmit, pristine, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="firstName" component={renderField} label="First name" />
            <Field name="lastName" component={renderField} label="Last name" />
            <Field name="email" component={renderField} label="Email" />
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

ReduxValidationForm = reduxForm({
    form: 'reduxvalidation',
    validate,
    destroyOnUnmount: false,
    onSubmit: (data) => {
        //console.log(data);
    }
})(ReduxValidationForm);

export default ReduxValidationForm;