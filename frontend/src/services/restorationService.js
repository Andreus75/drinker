import axios from 'axios';

let url = 'http://localhost:5000/restorations';

const getRestorations = async () => {
    return await axios.get(url).then(res => console.log(res));
}

const getRestorationById = async (restoration_id) => {
    return await axios.get(url + '/' + restoration_id);
}

export {getRestorations, getRestorationById};
