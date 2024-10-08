import axios from 'axios'

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: productionUrl,
});

export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    }).format((price / 10).toFixed(2));
    return dollarsAmount;
};

