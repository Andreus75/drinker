import "./header.css"

import {Link} from "react-router-dom";

export default function CommonHeader () {
    return (
        <div className="header">
            <div>
                <a href='/main' className="logo"><img src="/images/PikPng.com_bebidas-png_898322.png"
                                                      alt="DRINKERS"/></a>
            </div>
            <div className="auth">
                <Link to={'/main/login'}>вхід / </Link>
                <Link to={'/main/registration'}>реєстрація</Link>
            </div>

        </div>
    );
}
