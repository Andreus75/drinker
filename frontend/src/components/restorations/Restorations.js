import './Restorations.css';

import {useEffect} from "react";

import {getRestorations} from "../../services/restorationService";
import {useDispatch, useSelector} from "react-redux";
import {GET_RESTORATIONS,} from "../../redux/actions/actions";
import Restoration from "../restoration/Restoration";


export default function Restorations (props) {

    let {history} = props;
    let {restorationReducer: { restorations }} = useSelector(state => state);
    let dispatch = useDispatch();

    useEffect(() => {
        getRestorations().then(({data}) =>
            dispatch({type: GET_RESTORATIONS, payload: data})
        );
    }, [dispatch]);
    console.log(restorations);
    return (
        <div className={'restorations'}>
            {
                restorations.map(value => <Restoration key={value.id} restoration={value} history={history}/>)
            }
        </div>
    );
}
