import axios from 'axios';

let url = 'http://localhost:5000/contacts';

const getContactById = (contact_id) => {
    return axios.get(url + '/' + contact_id);
}

export {getContactById};

