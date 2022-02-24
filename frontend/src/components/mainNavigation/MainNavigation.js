import "./MainNavigation.css"
import {Route, Switch} from "react-router-dom";
import Attention from "../attention/Attention";
import Main from "../main/Main";
import PersonalOfficeUser from "../personalOffice/PersonalOfficeUser";
import PersonalOfficeAdmin from "../personalOffice/PersonalOfficeAdmin";
import PersonalOfficeCritic from "../personalOffice/PersonalOfficeCritic";
import Activation from "../registration/Activation";

export default function MainNavigation () {
    return (
        <div className={'main_navigation'}>
            <Switch>
                <Route path={'/personalOfficeUser'} component={PersonalOfficeUser}/>
                <Route path={'/personalOfficeAdmin'} component={PersonalOfficeAdmin}/>
                <Route path={'/personalOfficeCritic'} component={PersonalOfficeCritic}/>
                <Route path={'/activation'} component={Activation}/>
                <Route path={'/main'} component={Main}/>
                <Route path={'/'} component={Attention}/>
            </Switch>

        </div>
    );
}
