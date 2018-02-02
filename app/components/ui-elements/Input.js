import React from "react";

const Input = (props) => {
    console.log(props);
    let inputElement = null;

    switch (props.elementType){
        case ('input'): 
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.elementChange} />;
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
        <div className="formGroup">
            <label>{props.elementLabel}:</label>
            {inputElement}
        </div>
    )
}

export default Input; 

