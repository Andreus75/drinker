import {useEffect} from "react";
import {getUsers} from "../../services/userService";

export default function Users () {

    useEffect(() => {
        getUsers().then(value => console.log(value.data));
    })

    return (
        <div>

        </div>
    );
}
