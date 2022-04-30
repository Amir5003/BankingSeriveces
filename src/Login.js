import React, { Component } from 'react';
import {FaUserAlt , FaLock} from 'react-icons/fa'

import Validate from './Validate';
import './ExternalCSS.css';
import Input from './FormComponents/Input';
import Button from './FormComponents/Button';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      loggedin:false,
      formIsValid: false,
      formControls: {
       my_email: {
          type: 'text',
          value: '',
          placeholder: 'What is your email',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: {
            isRequired: true,
            isEmail: true,
          },
        },

        password: {
          type: 'password',
          value: '',
          placeholder: 'What is your password',
          valid: false,
          errorMsg: '',
          touched: false,
          validationRules: { 
            minLength: 6,
            maxLength: 12,
            isRequired: true,
            // isNumber: true,
            isAphaNumeric:true,
          },
        }
      }
    }
  }

  componentDidMount() {
    const updatedControls = {
      ...this.state.formControls
    };

    
    let formIsValid = true;
    for (let formElementId in updatedControls) {
      let ValidationResult=Validate( updatedControls[formElementId].value,  updatedControls[formElementId].validationRules);
      updatedControls[formElementId].valid = ValidationResult.valid;
     console.log(ValidationResult)
    if ((!updatedControls[formElementId].valid) && (updatedControls[formElementId].touched)) {
      updatedControls[formElementId].errorMsg = ValidationResult.errorMsg
    }
    else {
      updatedControls[formElementId].errorMsg = ''
    }
    
    formIsValid = updatedControls[formElementId].valid && formIsValid;
  
  }
    
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  }
  
  changeHandler = event => {
    
      const name = event.target.name;
      console.log("Name : "+name);

      const updatedControls = {
        ...this.state.formControls
      };

      const updatedFormElement = {
        ...updatedControls[name]
      };

      let value;
      let selectedOptions;
      let newValArray;

     console.log(updatedControls[name].validationRules.isNumber)
    //  if (updatedControls[name].validationRules.isNumber)
    //   {
    //     const pattern = /^[0-9\b]+$/ 
    //     if ((event.target.value!== '') && (!pattern.test(event.target.value)))
    //       return;
    //   }



      // console.log(updatedControls[name].validationRules.isAphaNumeric)
      // if (updatedControls[name].validationRules.isAphaNumeric)
      // {
      //   const pattern = /^[a-zA-Z0-9]+$/ 
      //   if ((event.target.value!== '') && (!pattern.test(event.target.value)))
      //     return;
      // }



      // if (updatedControls[name].validationRules.maxLength)
      // {
      //   if (event.target.value.length > updatedControls[name].validationRules.maxLength)
      //     return;
      // }

      if (updatedControls[name].value instanceof Array &&
        updatedControls[name].type === 'select' &&
        updatedControls[name].multiple !== undefined &&
        updatedControls[name].multiple
        )
      {
        selectedOptions = event.target.selectedOptions;
        newValArray = [...selectedOptions].map(option => option.value);
        value = newValArray;
        console.log("MultiSelect - Value : "+value)
      }
      else 
      {
        value = event.target.value;
        if (updatedControls[name].value instanceof Array &&
        updatedControls[name].type === 'checkbox') {
          console.log("Before Checkbox Value : "+value)
          if(updatedControls[name].value.indexOf(value) > -1) {
          newValArray = 
          updatedControls[name].value.filter(s => s !== value)
          } else {
          newValArray = [...updatedControls[name].value, value];
          }
        value = newValArray;
        console.log("Checkbox Value : "+value)
        }
        else
        {
        value = event.target.value
        console.log("Value : "+value)
        }
      }
     
      updatedFormElement.value = value;
      updatedFormElement.touched = true;

      let ValidationResult = Validate(value, updatedFormElement.validationRules);
      console.log(ValidationResult)
      updatedFormElement.valid = ValidationResult.valid;
      if ((!updatedFormElement.valid) && updatedFormElement.touched)
      {
        updatedFormElement.errorMsg = ValidationResult.errorMsg
      }
      else {
        updatedFormElement.errorMsg = ''
      }

      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }

      this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
      });

  }
  
  
  formSubmitHandler = () => {
    this.props.history.push('/login/home');
    console.log("yho are redirect to next")
	const formData = {};
	for (let formElementId in this.state.formControls) {
	    formData[formElementId] = this.state.formControls[formElementId].value;
	}
    
    	console.dir(formData);
      
  }
  // handlebutton = () => {
  //   this.setState({
  //     loggedin:true})
  //     console.log("yho are redirect to next")
  //   this.props.history.push('/login/welcome');
  // }

  render() {
    
    return (
      <div className="login_container">

           <Input 
                  inputType={'email'}
                  title={<h4><FaUserAlt />   {'UserName'}</h4>}
                  name={'my_email'}
                  placeholder={this.state.formControls.my_email.placeholder}
                  value={this.state.formControls.my_email.value}
                  handleChange={this.changeHandler}
                  touched={this.state.formControls.my_email.touched}
                  valid={this.state.formControls.my_email.valid}
                  errorMsg={this.state.formControls.my_email.errorMsg}
          />

          <Input inputType={'password'}
                     title={<h4><FaLock />  {'Password'}</h4>}
                     name={'password'}
                     placeholder={this.state.formControls.password.placeholder}
                     value={this.state.formControls.password.value}
                     handleChange={this.changeHandler}
                     touched={this.state.formControls.password.touched}
                     valid={this.state.formControls.password.valid}
                     errorMsg={this.state.formControls.password.errorMsg}
          />
          <Button 
              action = {this.formSubmitHandler}
              type = {'primary'} 
              title = {'Submit'} 
              // style={buttonStyle}
              disabled={! this.state.formIsValid}
              // onClick={this.handlebutton}
              
          /> 
      </div>
    );

  }
}



export default Login;