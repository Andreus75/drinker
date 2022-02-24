import axios from "axios";

let url = 'http://localhost:5000/auth';

const login = async (body) => {
    try {
        const response = await axios.post(url, body);
        console.log(response.data.userNormalization.role);
        localStorage.setItem('auth', response.data.access_token);
        localStorage.setItem('role', response.data.userNormalization.role);
    } catch (e) {
        return e.response;
    }
}

export { login };
