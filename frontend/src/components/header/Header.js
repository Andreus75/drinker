import "./header.css";
import {Link} from "react-router-dom";

export default function Header(props) {
    const { history } = props;

    const choose_Personal_office = () => {
        const role = localStorage.getItem('role');
        console.log(role);
        if (role === 'user') {
            history.push('/personalOfficeUser');
        }
        if (role === 'admin') {
            history.push('/personalOfficeAdmin');
        }
        if (role === 'critic') {
            history.push('/personalOfficeCritic');
        }
    }

    return (
        <div className="header">
            <div>
                <a href='/main' className="logo"><img src="/images/PikPng.com_bebidas-png_898322.png"
                                                      alt="DRINKERS"/></a>
            </div>
            <div className="auth">
                <Link to={'/main/login'}>вхід / </Link>
                <Link to={'/main/registration'}>реєстрація</Link>
                {/*<Link to={'/personalOffice'}>*/}
                    <button className="own_cabinet" onClick={choose_Personal_office}>особистий кабінет</button>
                {/*</Link>*/}
            </div>

        </div>
    );
}
