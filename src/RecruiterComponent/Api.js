import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your API URL

export const fetchTransactions = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/transactions`);
        return response.data;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return [];
    }
};
