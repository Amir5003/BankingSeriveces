import React from 'react';
import {NavLink} from 'react-router-dom';
import { withTranslation} from 'react-i18next';
//Link accepts only one props "to"
const Nav = (props) =>{
    console.log(props)
    const {i18n } = props;
    console.log(i18n)
const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    
    
  };
    return(
        <nav className="welcome_page_nav">
            <h3>XYZ Services</h3>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ar')}>Arabic</button>
            <ul className="nav_links">
                <NavLink exact className="nav_link" to="/login/home">
                <li>Home</li>
                </NavLink>
                <NavLink className="nav_link" to="/about">
                <li>About</li>
                </NavLink>
                <NavLink className="nav_link" to="/contact">
                <li>Contact</li>
                </NavLink>
                <NavLink className="nav_link" to="/services">
                <li>Services</li>
                </NavLink>
            </ul>
        </nav>
    )
}
// export default Nav;
export default withTranslation()(Nav);