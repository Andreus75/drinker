import axios from 'axios';

let url = 'http://localhost:5000/users';

const createUser = async (user, avatar) => {
    const fileField = document.querySelector('input[type="file"]');

    const formData = new FormData();

    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('age', user.age);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('avatar', fileField.files[0]);

    return await axios.post(url, formData, {
        headers: {
            "Content-type": "multipart/form-data"
        }
    });
}

const getUsers = () => {
    return axios.get(url);
}

const getUserById = (user_id) => {
    return axios.get(url + '/' + user_id);
}

export {getUsers, getUserById, createUser};
