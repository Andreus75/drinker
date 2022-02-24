import "./Restoration.css"
import {Link} from "react-router-dom";

export default function Restoration ({ restoration, history }) {

    let { name, photo } = restoration;

    return (
        <div className={'restoration'}>
            <Link to={`/main/restorationInfo/${restoration._id}`}><img src={photo}/></Link>
            <h4>{name}</h4>
        </div>
    );
}
