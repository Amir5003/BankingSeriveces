import React from 'react';
import './InputForm.css'
function InputForm(){
    return(
        <div className="contact">
          <form>
            <table>
              <tr>
                <td>Your Name:</td>
                <td>
                <input
                      id = 'user'
                      name = 'username'
                      type = 'text'
                      placeholder = 'Your Name'
                      autoComplete = 'off'
                    //   value = {this.state.username}
                    //   onChange = {this.myChangeHandler}
                    />
                </td>
              </tr>
              <tr>
                <td>Your E-mail:</td>
                <td>
                <input
                      id = 'user'
                      name = 'username'
                      type = 'text'
                      placeholder = 'Your Email'
                      autoComplete = 'off'
                    //   value = {this.state.username}
                    //   onChange = {this.myChangeHandler}
                    />
                </td>
              </tr>
              <tr>
                <td>Your Message:</td>
                <td>
                <textarea
                      id = 'user'
                      name = 'username'
                      type = 'textarea'
                      placeholder = 'Type your message here'
                      autoComplete = 'off'
                      rows ={10}
                      cols = {50}
                    //   value = {this.state.username}
                    //   onChange = {this.myChangeHandler}
                    />
                </td>
              </tr>
            </table>
          </form>
        </div>
    )
}
export default InputForm;