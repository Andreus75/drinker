import axios from "axios";

let url = 'http://localhost:5000/auth';

const login = async (body) => {
    try {
        const response = await axios.post(url, body);

        localStorage.setItem('auth', response.data.access_token);
    } catch (e) {
        return e.response;
    }
}

export { login };
