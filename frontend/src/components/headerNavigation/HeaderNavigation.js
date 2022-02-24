import {Route, Switch} from "react-router-dom";
import Header from "../header/Header";
import StartHeader from "../header/StartHeader";
import CommonHeader from "../header/CommonHeader";

export default function HeaderNavigation () {
    return (
        <div>
            <Switch>
                <Route path={'/main/restorations'} component={Header}/>
                <Route path={'/main'} component={CommonHeader}/>
                <Route path={'/'} component={StartHeader}/>
            </Switch>
        </div>
    );
}
