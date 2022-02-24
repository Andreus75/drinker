import axios from 'axios';

let url = 'http://localhost:5000/restorations';

const getRestorations = async () => {
    return await axios.get(url);
}

const getRestorationsFilter = async (min_check, max_check, vi_fi, parking, music) => {

    return await axios.get(
        url +
        '/filters?min_check=' + min_check +
        '&max_check=' + max_check +
        '&vi_fi=' + vi_fi +
        '&parking=' + parking +
        '&music=' + music
    );
}

const getRestorationById = async (restoration_id) => {
    return await axios.get(url + '/' + restoration_id);
}



export {getRestorations, getRestorationById, getRestorationsFilter};
