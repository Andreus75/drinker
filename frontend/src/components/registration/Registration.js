import {useState} from "react";
import {createUser} from "../../services/userService";

export default function Registration ( props) {

    let { history } = props;

    let [first_name, setFirstName] = useState('');
    let [last_name, setLastName] = useState('');
    let [age, setAge] = useState('');
    let [email, setUserEmail] = useState('');
    let [password, setUserPassword] = useState('');
    let [avatar, setUserAvatar] = useState('');

    let addUserName = (e) => {
        setFirstName(e.target.value);
    }
    let addUserFamily = (e) => {
        setLastName(e.target.value);
    }
    let addUserAge = (e) => {
        setAge(e.target.value);
    }
    let addUserEmail = (e) => {
        setUserEmail(e.target.value);
    }
    let addUserPassword = (e) => {
        setUserPassword(e.target.value);
    }
    let addUserAvatar = (e) => {
        setUserAvatar(e.target.value);
    }

    let saveUser = async (e) => {
        e.preventDefault();
        const user = {first_name, last_name, age, email, password};

        await createUser(user, avatar);

        history.push('/activation');
    }

    return (
        <div>
            <p>registration</p>
            <form onSubmit={saveUser}>
                <input type="text" name={'first_name'} value={first_name} onChange={addUserName} min={3} max={30} placeholder={'first name'}/>
                <br/>
                <input type="text" name={'last_name'} value={last_name} onChange={addUserFamily} min={2} max={30} placeholder={'last name'}/>
                <br/>
                <input type="number" name={'age'} value={age} onChange={addUserAge} placeholder={'age'}/>
                <br/>
                <input type="text" name={'email'} value={email} onChange={addUserEmail} placeholder={'email'}/>
                <br/>
                <input type="text" name={'password'} value={password} onChange={addUserPassword} placeholder={'password'}/>
                <br/>
                <input type="file" name={'avatar'} value={avatar} onChange={addUserAvatar} placeholder={'avatar'}/>
                <br/>
                <button>Create User</button>
            </form>
        </div>
    );
}
