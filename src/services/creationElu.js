import { jwtDecode } from 'jwt-decode';

const eluService = {
    async creationElu(nom, prenom, email, password) {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        const id_collectivite = decoded.id_collectivite;


        const response = await fetch("http://localhost:5000/creationElu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ nom, prenom, email, password, id_collectivite })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Erreur lors de la création.");
        }

        return response.json();
    },

    async getElusByCollectivite() {
        const token = localStorage.getItem("token");
        const id_collectivite = jwtDecode(token).id_collectivite;

        const response = await fetch(`http://localhost:5000/elus/${id_collectivite}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Erreur lors du chargement des élus.");
        }

        return response.json();
    }
};

export default eluService;
