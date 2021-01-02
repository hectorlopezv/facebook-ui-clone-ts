import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://facebook-mongodob-backedn.herokuapp.com/'
});

export default instance;