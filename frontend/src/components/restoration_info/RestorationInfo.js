import './RestorationInfo.css';

import {useEffect, useState} from "react";
import {getRestorationById} from "../../services/restorationService";
import {useDispatch, useSelector} from "react-redux";
import {GET_RESTORATION} from "../../redux/actions/actions";
import {getAddressById} from "../../services/addressService";
import {getContactById} from "../../services/contactService";

export default function RestorationInfo (props) {

     const {match: {params : {id}}} = props;

     let [address, setAddress] = useState({});
     let {city, street, number} = address;
     let [contact, setContact] = useState({});
     let {name_manager, phone, email} = contact;

     let {restorationReducer: { restorations }} = useSelector(state => state);
     let dispatch = useDispatch();

     useEffect(async () => {
         await getRestorationById(id).then(({data}) => dispatch({type: GET_RESTORATION, payload: data}));
     }, []);

    const { name, persons, average_check, view_statistics, start_day_work, end_day_work, start_hour, end_hour, weekend, photo, address_id, contact_id, review_id, vi_fi, parking, music} = restorations;

    let viFi, Parking, Music;
    if (vi_fi) {
        viFi = 'є';
    } else {
        viFi = 'немає';
    }
    if (parking) {
        Parking = 'є';
    } else {
        Parking = 'немає';
    }
    if (music) {
        Music = 'є';
    } else {
        Music = 'немає';
    }

    useEffect(async () => {
         await getAddressById(address_id).then(({data}) => setAddress(data));
     }, [address_id]);

    useEffect(() => {
        getContactById(contact_id).then(({data}) => setContact(data));
    }, [contact_id]);

     return (
         <div>
             <div className={'restorationInfo'}>
                 <div>
                     <h3>{name}</h3>
                     <p>адреса</p>
                     <h4>{city}, {street} N = {number}</h4>
                     <p>графік роботи</p>
                     <h4>{start_day_work} - {end_day_work}</h4>
                     <h4>{start_hour} - {end_hour}</h4>
                     <h4>вихідний - {weekend}</h4>

                     <h4>кількість місць : {persons} </h4>
                     <h4>середній чек : {average_check}</h4>
                     <h4>vi-fi: {viFi}</h4>
                     <h4>parking: {Parking}</h4>
                     <h4>music: {Music}</h4>
                 </div>
                 <div>
                     <p>контакти</p>
                     <h4>manager : {name_manager}</h4>
                     <h4>phone : {phone}</h4>
                     <h4>email : {email}</h4>
                 </div>
                 <button className={'puyachok'}>Puyachok</button>
                 <div>
                     <img src={photo}/>
                 </div>
             </div>
             <div className={'news'}>
                 news
             </div>
         </div>

     );
 }
