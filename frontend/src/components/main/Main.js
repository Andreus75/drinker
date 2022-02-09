import './main.css'
import {Route, Switch} from "react-router-dom";
import Attention from "../attention/Attention";
import Restorations from "../restorations/Restorations";
import Users from "../users/Users";
import Registration from "../registration/Registration";
import Login from "../login/Login";
import Activation from "../registration/Activation";
import FilterForm from "../filterForm/FilterForm";

export default function Main () {
    return (
        <div className="main">
            <div className="filter_section">
                <Route path={'/restorations'} component={FilterForm}/>
            </div>
            <div className="main_section">
                <Switch>
                    <Route path={'/attention'} component={Attention}/>
                    <Route path={'/activation'} component={Activation}/>
                    <Route path={'/registration'} component={Registration}/>
                    <Route path={'/restorations'} component={Restorations}/>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/users'} component={Users}/>

                    {/*<Route path={'/'} component={Restorations}/>*/}
                </Switch>

            </div>
        </div>
    );
}
