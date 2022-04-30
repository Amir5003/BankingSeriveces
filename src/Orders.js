import React from 'react';
import './ExternalCSS.css';
import axios from 'axios';

class Orders extends React.Component {
    state = { 
      persons :[]
    };
    
  
  componentDidMount() {

   console.log(this.state)
   console.log(this.state.orders)
   axios.get(`http://localhost:3001/getuser`)
   .then(res => {
     console.log(res)
     const persons = res.data.ord;
     console.log(persons);
   
     this.setState({ persons });
     console.log(this.state)
     console.log(this.state.persons)
  
    

   })
 console.log(this.state)
   

  } 

  

  render() {
    return (
        <div className = "orders_container">
            <table className="orders_table">
            { this.state.persons.map(product => <tr key={product.order_id}><td>{product.order_id}</td>
            <td>{product.product_name}</td><td>{product.price}</td></tr>)}
            </table>
            
      
      </div>
    )
  }
}

export default Orders;