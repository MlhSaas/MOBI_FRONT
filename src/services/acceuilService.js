import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const acceuilService = {
    async getPostsByCollectivite(token) {
        try {
            const response = await axios.get(`${API_URL}/posts/getPostByCollectivite`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des publications:', error);
            throw error;
        }
    },
};

export default acceuilService;
