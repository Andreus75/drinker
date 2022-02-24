import './main.css'
import {Route, Switch} from "react-router-dom";
import FilterForm from "../filterForm/FilterForm";
import Activation from "../registration/Activation";
import Registration from "../registration/Registration";
import Restorations from "../restorations/Restorations";
import Login from "../login/Login";
import Users from "../users/Users";
import RestorationInfo from "../restoration_info/RestorationInfo";

export default function Main (props) {

    return (
        <div className="main">
            <div className="filter_section">
                <Switch>
                    <Route path={'/main'} component={FilterForm}/>
                    <Route path={'/main/restorations'} component={FilterForm}/>
                    <Route path={'/main/restorations/filters'} component={FilterForm}/>
                </Switch>
            </div>
            <div className="main_section">
                <Switch>
                    <Route path={'/main/restorationInfo/:id'} render = {(props) => {
                        return <RestorationInfo {...props}/>
                    }}/>
                    <Route path={'/main/activation'} component={Activation}/>
                    <Route path={'/main/registration'} component={Registration}/>
                    <Route path={'/main/restorations'} component={Restorations}/>
                    <Route path={'/main/restorations/filters'} component={Restorations}/>
                    <Route path={'/main/login'} component={Login}/>
                    <Route path={'/main/users'} component={Users}/>
                    <Route path={'/main'} component={Restorations}/>

                </Switch>

            </div>
        </div>
    );
}
