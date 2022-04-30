// import React from 'react';
// //import './HomePageContainer.css'
// import '../HomePageContainer.css'
// import { withTranslation} from 'react-i18next';


// import { NavLink} from "react-router-dom";
// // import AEPS from '../AEPS'
// function HomePageComponent(){
 
//     return(
//         <div className = "btn-container">
            
        
            
//             <nav>
//             <button>Balance</button>
//             <button>Travel</button>
//             <button>Insurance</button>
//             <button>Pay Loan</button>
//             <button>Electricity</button>
//             <NavLink to="/orders">
//             <button>Orders</button>
//             </NavLink>
//             <NavLink to="/recharge">
//             <button>Mobile Reacharge</button>
//             </NavLink>
//             <NavLink to="/statement">
//             <button>Mini Statement</button>
//             </NavLink>
            
//             <NavLink to="/aeps">
//             <button>AEPS</button>
//             </NavLink>
            
//             </nav>
            
            
//         </div>
        
//     )
// }
// // export default HomePageComponent;
// export default withTranslation()(HomePageComponent);



import React from 'react';
import '../HomePageContainer.css'
import { withTranslation} from 'react-i18next';
import { NavLink} from "react-router-dom";

class HomePageComponent extends React.Component {
  
 
  render() {
    const { t } = this.props;
    console.log(t)
    return (
      <div>
          
          <div className = "btn-container">
          <div className = {t('home.myStyle')}>
            
        
            
            <nav>
            <button>{t('home.Balance')}</button>
            <button>{t('home.Travel')}</button>
            <button>{t('home.Insurance')}</button>
            <button>{t('home.PayLoan')}</button>
            <button>{t('home.Electricity')}</button>
            <NavLink to="/orders">
            <button>{t('home.Orders')}</button>
            </NavLink>
            <NavLink to="/recharge">
            <button>{t('home.MobileRecharge')}</button>
            </NavLink>
            <NavLink to="/statement">
            <button>{t('home.MiniStatement')}</button>
            </NavLink>
            
            <NavLink to="/aeps">
            <button>{t('home.AEPS')}</button>
            </NavLink>
            
            </nav>
            
            
        </div>
        </div>

       </div>
    )
    }
  }


export default withTranslation()(HomePageComponent);