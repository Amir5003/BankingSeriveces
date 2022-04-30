import React from 'react'
import './ExternalCSS.css'
import { withTranslation} from 'react-i18next';
class AEPS extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bank : 'Select Your Bank',
            banks : ['ALLAHBAD BANK', 'ANDHRA BANK' , 'AXIS BANK', 'BANK OF BADODA' , 'BANK OF INDIA' ,
            'BANDHAN BANK LIMITED', 'CANARA BANK' , 'GRAMIN VIKAS BANK','HDFC BANK', 'INDIAN BANK' ,
            'INDIAN OVERSEAS BANK','ORIENTAL BANK OF COMMERCE' , 'PUNJAB AND SIND BANK' ,
            'PUNJAB NATIONAL BANK' ,'STATE BANK OF INDIA' ,'UNITED BANK OF INDIA'],
            radio_value : 'Balance_Info',
            aadhar_error : '',
            amount_error :''
        }
        this.handleSelect=this.handleSelect.bind(this);
        this.handleTransfer = this.handleTransfer.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleTransfer(e){
        this.setState({radio_value:e.target.value});
        if(e.target.radio_value === 'Transfer'){
            console.log("hi i m transfer")
        }
    }
    handleSelect (e) {
        let value = e.target.value;
        let name = e.target.name;
        console.log(name);
        console.log(value)
        this.setState({bank : value})
    
    }
    handleInput(e){
        let val = e.target.value;
        let nam = e.target.name;
        let err ='' ;
        if(nam === 'aadhar'){
        
            if(val === ''){
                err = <h4>Aadhar Number can not be empty</h4>;
            }
            else if(!Number(val)){
                err = <h4>Enter Number instead of alphabets</h4>
            }
            else if(val.length !== 12){
                err = <h4>Aadhar length should be 12</h4>
            }
        this.setState({aadhar_error : err});
        this.setState({aadhar_number : e.target.value})
        }
        else if(nam === 'transfer'){
            let error = '';
            if(val === ''){
                error = <h4>Amount can not be empty</h4>;
            }
            else if(!Number(val)){
                error = <h4>Enter Number instead of alphabets</h4>
            }
            this.setState({amount : e.target.value})
            this.setState({amount_error : error});
        }
    }
    
    render(){
        const { t } = this.props;
    console.log(t)
        return(
            <div className = 'aeps_container'>
                <h2>AEPS</h2>
                <form className="aeps_form">       
                <div className = {'input_box'}>
                <input
                type = "radio"
                value = "Transfer"
                id = "transfer"
                
                checked = {this.state.radio_value === 'Transfer'}
                className = {'radio'}
                onChange = {this.handleTransfer}
                // defaultChecked={this.props.value==='Transfer'}
                />
                <label htmlFor = "transfer">{t('aeps.transfer')}</label>
                <input
                type = "radio"
                value = "Balance_Info"
                checked = {this.state.radio_value === 'Balance_Info'}
                id = "balance"
                
                className = {'radio'}
                onChange = {this.handleTransfer}
                />
                <label htmlFor = "balance">{t('aeps.balance')}</label>
                </div>
                <div className ="select_bank">   
                    <h3>{t('aeps.select_bank')}</h3>
                    <select
                    title = {'Bank'}
                    name = 'bank'
                    className = "form_control"
                    value = {this.props.bank}
                    onChange = {this.handleSelect}
                    options = {this.state.banks}
                    >
                    <option value = '' disabled>{this.props.placeholder}</option>
                    {this.state.banks.map(option =>{
                        return(
                            <option>
                                {option}
                            </option>
                        );
                    })}
                    </select>
                  
                </div>
                <div className = "aadhar">
                    <input
                        type = "text"
                        value ={this.state.aadhar_number}
                        placeholder = {t('aeps.aadhar_placeholder')}
                        id = "aadhar"
                        name = "aadhar"
                        onChange = {this.handleInput}
                        
                            
                    />
                    <div className ="aadhar_error">{this.state.aadhar_error}</div>
                </div>
                {(this.state.radio_value === 'Transfer')?<div className = 'amount'>
                    <input
                        type = 'text'
                        placeholder = {t('aeps.transfer_placeholder')}
                        name = "transfer"
                        onChange ={this.handleInput}
                        value = {this.state.amount}
                    />
                    {this.state.amount_error}
                </div>:null}
                <div className = 'submit_btn'>
                    <button onClick ={this.handleSubmit}>
                        Proceed
                    </button>
                </div>
                </form>
            </div>
        )
    }

}
// export default AEPS;
export default withTranslation()(AEPS);

