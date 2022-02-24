import {useState} from "react";
import {login} from "../../services/authService";

export default function Login (props) {

    const {history} = props;

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let addEmail = (e) => {
        setEmail(e.target.value);
    }
    let addPassword = (e) => {
        setPassword(e.target.value);
    }

    let saveAuth = async (e) => {
        e.preventDefault();

        const auth = {email, password};

        await login(auth);

        history.push('/main/restorations');
    }

    return (
        <div>
            <p>login</p>
            <form onSubmit={saveAuth}>
                <input type="text" name={"email"} value={email} onChange={addEmail} placeholder={'email'}/>
                <br/>
                <input type="text" name={"password"} value={password} onChange={addPassword} placeholder={'password'}/>
                <br/>
                <button>login</button>
            </form>
        </div>
    );
}
