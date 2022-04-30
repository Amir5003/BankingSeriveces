import React , {useEffect , useState} from 'react';
import './ExternalCSS.css';
import axios from 'axios';
const Orders2 = () => 
{
   const initialState = {
       orders :[]
   }
    const [orders, setOrders] = useState(initialState);
   
    useEffect(() => {
        axios.get(`http://localhost:3001/getuser`)
        .then(res => {
            console.log(res)
            const coming_data = res.data;
            console.log(coming_data);
            setOrders( {orders : coming_data})
            console.log(orders)

        })
        
      },[]);
      useEffect(()=>{
          console.log(orders)
          console.log(orders.orders.length)
      },[orders]
      );
    
      return (
        <div className = "orders_container">
            
            <table className="orders_table">
            <h2>_____Orders_____</h2>
            { orders.orders.map(product => <tr key={product.order_id}><td>{product.order_id}</td>
            <td>{product.product_name}</td><td>{product.price}</td></tr>)}
            </table>
            
        </div>
    )
  
}

export default Orders2;