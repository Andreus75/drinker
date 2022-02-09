import {useEffect} from "react";

import {getRestorations} from "../../services/restorationService";


export default function Restorations () {

    useEffect(() => {
        getRestorations().then(value => console.log(value));
    })

    return (
        <div>

        </div>
    );
}
