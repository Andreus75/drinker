import axios from "axios";

let url = 'http://localhost:5000/address';

const getAddressById = async (address_id) => {

    return await axios.get(url + '/' + address_id);
}

export { getAddressById };
