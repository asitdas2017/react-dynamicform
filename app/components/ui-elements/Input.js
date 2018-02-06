import React from "react";

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType){
        case ('input'): 
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.elementChange}
                onBlur={props.elementBlur} />;
            break;
        case ('textarea'): 
            inputElement = <textarea 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.elementChange} />;
            break;
        case ('select'): 
            inputElement = (
                <select value={props.value} onChange={props.elementChange}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.elementChange} />;
    }

    return (
        <div className="formGroup has-error" className={props.touched && props.inValid ? 'formGroup has-error' : 'formGroup'}>
            <label>{props.elementLabel}:</label>
            {inputElement}
            <span className="help-block">{props.elementError}</span>
        </div>
    )
}

export default Input; 

