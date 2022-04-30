import React from 'react';
import InputForm from './InputForm';
import ClayfinIFrame from './ClayfinIFrame';
import './Welcome.css';
function Contact(){
//inside the two component defined same class name in for main <div> and using display:inline-bloc width:50%
    return(
        <div>
            <h1>This is Contact Page</h1>
            <div >
            <InputForm/>
            <ClayfinIFrame/>
            
            </div>
        </div>
    )
}
export default Contact;