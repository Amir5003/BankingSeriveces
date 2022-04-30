import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";

function MainPage(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/login/home' component={Welcome}/>
        </Switch>
        </BrowserRouter>
    )
};
export default MainPage