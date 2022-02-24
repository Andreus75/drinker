import { useState } from "react";
import { getRestorationsFilter } from "../../services/restorationService";
import { GET_RESTORATIONS_FILTER } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

export default function FilterForm () {

    let dispatch = useDispatch();

    let [min_check, setMinCheck] = useState('');
    let [max_check, setMaxCheck] = useState('');
    let [vi_fi, setViFi] = useState(false);
    let [parking, setParking] = useState(false);
    let [music, setMusic] = useState(false);

    let addMinCheck = (e) => {
        setMinCheck(e.target.value);
    }
    let addMaxCheck = (e) => {
        setMaxCheck(e.target.value);
    }
    let chooseViFi = (e) => {
        setViFi(e.target.checked);
    }
    let chooseParking = (e) => {
        setParking(e.target.checked);
    }
    let chooseMusic = (e) => {
        setMusic(e.target.checked);
    }

    const search = (e) => {
        e.preventDefault();

        getRestorationsFilter(min_check, max_check, vi_fi, parking, music).then(({data}) => dispatch({type: GET_RESTORATIONS_FILTER, payload: data}));
    }

    return (
        <div>
            <p>Фільтрація</p>
            <form onSubmit={search}>
                <p>Середній чек</p>
                <h5>від</h5>
                <input type={"text"} name={'min_check'} value={min_check} onChange={addMinCheck} placeholder={'min sum'}/>
                <h5>до</h5>
                <input type={"text"} name={'max_check'} value={max_check} onChange={addMaxCheck} placeholder={'max sum'}/>
                <br/>
                <input type={"checkbox"} name="vi-fi" checked={vi_fi} onChange={chooseViFi}/>
                <label>vi-fi</label>
                <br/>
                <input type={"checkbox"} name="parking" checked={parking} onChange={chooseParking}/>
                <label>парковка</label>
                <br/>
                <input type={"checkbox"} name="music" checked={music} onChange={chooseMusic}/>
                <label>жива музика</label>
                <br/>
                <button>пошук</button>
            </form>

        </div>
    );
}
