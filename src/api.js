import axios from 'axios';

const client = axios.create({
    baseURL:
        'https://outside-in-dev-api.herokuapp.com/Sm4gvIrrawheMJa0KRXVu7fnskzigEZT',
});

const api = {
    loadRestaurants() {
        return client.get('/restaurants').then(response => response.data);
    },
};

export default api;
