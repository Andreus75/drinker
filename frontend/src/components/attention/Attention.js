import "./Attention.css";
import {Link} from "react-router-dom";

export default function Attention () {
    return (
        <div className={'attention'}>
            <h2>Увага!!!</h2>
            <h4>Адміністрація застерігає вас бути обережними і не зустрічатися з незнайомими людьми в небезпечних чи невідомих вам місцях.</h4>
            <h3>Запускаючи цей додаток ви погоджуєтесь, що вам є 18 років.</h3>
            <Link to={"/main"}>
                <button>Погоджуюсь</button>
            </Link>

        </div>
    );
}
