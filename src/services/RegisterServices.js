const registerService = {
    async registerCollectivite({ nom, email, password }) {
        const res = await fetch('http://localhost:3001/api/auth/register-collectivite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nom, email, password })
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || "Erreur lors de l'inscription");
        }

        return data;
    }
};

export default registerService;
