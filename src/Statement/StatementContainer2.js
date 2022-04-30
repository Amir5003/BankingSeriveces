// import React, { Component , useEffect, useMemo} from 'react'
// import {useTable} from 'react-table'
// import COLUMNS from './Columns'
// import MOCK_DATA from './MOCK_DATA.json'
// import { connect } from 'react-redux'
// import * as actionCreators from './Actions';
// import '../ExternalCSS.css';
// // import { ToastHeader } from 'react-bootstrap';


// export const StatementContainer2 = () => {

//     const columns = useMemo (() => COLUMNS , [])
//     const data  = useMemo(() => MOCK_DATA, [])
//     const tableInstance =useTable({
//         columns ,
//         data ,
//     })
//     return(
//         <div>
//             <table>
//                 <thead></thead>
//             </table>
//         </div>
//     )
// }
// //class StatementContainer extends Component{
//     // constructor(props) {
//     // super(props);  
//     // this.state = {
//     //     st :[]
//     // }
//     // // console.log("hii it is constructor");
//     // // console.log(this.props.statements)
//     // // }

    
//     // // componentDidUpdate(){
//     // //     console.log(this.props.statements)
//     // //    // this.setState({st : this.props.statements})
//     // // }
    
//     // // useEffect(() => {
//     // //     this.props.fetchStatement();
//     // //     console.log(this.props.statements)
//     // //   },[]);
//     // // componentDidMount() {
//     // //     this.props.fetchStatement();
//     // //     console.log(this.props)
        
//     // //     console.log(this.state.st)
//     // // }

//     // // render(){
          
//     // //     console.log(this.props.statements);
//     // //     console.log(this.state.st)
//     // //    // this.setState({st : this.props.statements}) *giving infinite times  error*
//     // //     console.log(this.state.st)
//     // //    // console.log(this.props.t_id)
        
        


//     // //     console.log(this.props.loading);
//     // //     console.log(this.props.error)
//     //     return(
            
//     //         <div className = "statement_container">
//     //             <div>
//     //             </div>
//     //         {/* {(this.props.loading)?<h1>Loading...</h1>:(this.props.error)?
//     //         <h1>{this.props.error}</h1>:<table className="orders_table">
//     //             <thead>
                  
//     //                 <th>Transaction ID</th>
//     //                 <th>Transaction Date</th>
//     //                 <th>Remark</th>
//     //                 <th>
//     //                     <button
//     //                    onClick={() => this.props.sortBy(this.props.statements)}
//     //                     >
//     //                     Amount
//     //                     </button>
//     //                 </th>
//     //                 <th>Type</th>
                    
//     //             </thead> */}<table className="orders_table">
              
//     //         { this.props.statements.map(statement => <tr key={statement.t_id}>
                
//     //         <td>{statement.t_id}</td><td>{statement.t_date}</td>
//     //         <td>{statement.remark}</td><td>{statement.amount}</td>
//     //         <td style={ statement.type === "credit" ? { color:"green"} : {color:"red"}}>{statement.type}</td>
//     //         </tr>)}
           
//     //         </table>}
//     //         </div>
//        // )
//     // }
// //}

// //}

// function mapStateToProps(state) {
//     return { 
//         statements: state.statements ,
//         loading : state.loading ,
//         error : state.error
        
//     }
// }
  
// function mapDispatchToProps (dispatch){ 
//     return{
//         fetchStatement: () => dispatch(actionCreators.fetchStatement()),
//         // sortBy : (key) => dispatch(actionCreators.sortBy(key))
//     } 
// }

// export default connect (mapStateToProps , mapDispatchToProps)(StatementContainer2);
  