import React from 'react'
import './fromInput.css'


const FormInput =(props)=>{
    return(
        <div class="formInput">
        <label>{props.label}</label><br/>
            <input type={props.type} name={props.name} onChange={props.onchange} value={props.value} ></input>
        </div>
    )
}

export default FormInput ; 

