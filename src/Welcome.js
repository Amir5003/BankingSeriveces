import React , {Suspense} from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from './config/I18n'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './About';
import Home from './HomePageComponents/Home';
import Services from './Services';
import Contact from './Contact';
import Nav from './Nav';
import FooterComponent from './FooterComponent';
import Orders2 from './Orders2';
import './Welcome.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AEPS from './AEPS';
import Statement from './Statement/Statement';

const Welcome = () =>{
    return(
        <Router>
            <div>
            <I18nextProvider i18n={i18n}>
            <Suspense fallback="loading">
        
    
    
                <Nav/>
                <Switch>
                    <Route path= "/login/home" exact component={Home} />
                    <Route path= "/about" component={About} />
                    <Route path= "/contact" component={Contact} />
                    <Route path= "/services" component={Services} />
                    <Route path= "/aeps" component={AEPS} />
                    <Route path = "/orders" component={Orders2} />
                    <Route path = "/statement" component={Statement} />
                </Switch>
                <FooterComponent/>
                </Suspense>
                </I18nextProvider>
            </div>
        </Router>
    )
}
export default Welcome;