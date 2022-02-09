import "./header.css";
import { Link } from "react-router-dom";

export default function Header () {
    return (
        <div className="header">
            <div>
                <a href="/" className="logo"><img src="/images/PikPng.com_bebidas-png_898322.png" alt="DRINKERS"/></a>
            </div>
            <div className="auth">
                <Link to={'/login'}>вхід / </Link>
                <Link to={'/registration'}>реєстрація</Link>
                <Link to={''}>
                    <button className="own_cabinet">особистий кабінет</button>
                </Link>
            </div>

        </div>
    );
}
