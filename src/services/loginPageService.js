import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const authService = {
    async login(email, password) {
        try {
            const response = await axios.post(`${API_URL}/auth/login-collectivite`, { email, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log(response.data.token);
            }
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            throw error;
        }
    },
    logout() {
        localStorage.removeItem('token');
    },
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    },
};

export default authService;
