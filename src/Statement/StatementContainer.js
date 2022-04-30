import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './Actions';
import '../ExternalCSS.css';
// import { ToastHeader } from 'react-bootstrap';

class StatementContainer extends Component{
    // constructor(props) {
    // super(props);  
    // this.state = {
    //     st :[]
    // }
    // console.log("hii it is constructor");
    // console.log(this.props.statements)
    // }

    
    // componentDidUpdate(){
    //     console.log(this.props.statements)
    //    // this.setState({st : this.props.statements})
    // }
    // handleClick(){
    //     this.props.dispatch(sort('desc', 'amount'));
    // }
  
    componentDidMount() {
        this.props.fetchStatement();
        console.log(this.props)
        
        // console.log(this.state.st)
    }
    componentWillUpdate(){
        // this.props.sortBy();
    }

    render(){
          
        console.log(this.props.statements);
    //     console.log(this.state.st)
    //    // this.setState({st : this.props.statements}) *giving infinite times  error*
    //     console.log(this.state.st)
       // console.log(this.props.t_id)

        // const sortArray =(st)=>{
        //     const sorted = st.sort((a,b) => b['amount'] - a['amount'])
        //     console.log(sorted)
            
    
        // }

        
        


        console.log(this.props.loading);
        console.log(this.props.error)
        return(
            
            <div className = "statement_container">
                <div>
                </div>
            {(this.props.loading)?<h1>Loading...</h1>:(this.props.error)?
            <h1>{this.props.error}</h1>:<table className="orders_table">
                <tr>
                  
                    <th>Transaction ID</th>
                    <th>Transaction Date</th>
                    <th>Remark</th>
                    <th>
                        <button
                    //    onClick={() => this.props.sortBy(this.props.statements.amount)}
                        onClick ={() => this.props.sortArray( this.props.statements)}
                        >
                        Amount
                        </button>
                    </th>
                    <th>Type</th>
                    
                </tr>
            <tbody> 
            { this.props.statements.map(statement => <tr key={statement.t_id}>
                
            <td>{statement.t_id}</td><td>{statement.t_date}</td>
            <td>{statement.remark}</td><td>{statement.amount}</td>
            <td style={ statement.type === "credit" ? { color:"green"} : {color:"red"}}>{statement.type}</td>
            </tr>)}
            </tbody> 
           
            </table>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        statements: state.statements ,
        loading : state.loading ,
        error : state.error,
        
  
        
    }
}
  
function mapDispatchToProps (dispatch){ 
    return{
        fetchStatement: () => dispatch(actionCreators.fetchStatement()),
        // sortBy : (key) => dispatch(actionCreators.sortBy(key))
        sortArray : ( sortStatement) => dispatch(actionCreators.sortArray(sortStatement))
    } 
}

export default connect (mapStateToProps , mapDispatchToProps)(StatementContainer);
  