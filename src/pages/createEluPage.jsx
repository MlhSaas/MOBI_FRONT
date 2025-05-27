import React, { useState, useEffect } from "react";

import {jwtDecode} from "jwt-decode";
import "../styles/createEluPage.css";
import eluService from "../services/creationElu.js";

const CreateEluPage = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [elus, setElus] = useState([]);
    const [message, setMessage] = useState("");

    const token = localStorage.getItem("token");
    const id_collectivite = token ? jwtDecode(token).id_collectivite : null;

    // Récupère la liste des élus liés à la collectivité
    const fetchElus = async () => {
        try {
            const response = await eluService.getElusByCollectivite();
            setElus(response);
        } catch (err) {
            console.error("Erreur lors du chargement des élus :", err);
        }
    };

    useEffect(() => {
        if (token) {
            fetchElus();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await eluService.creationElu(nom, prenom, email, password);
            setMessage("Élu ajouté avec succès !");
            setNom("");
            setPrenom("");
            setEmail("");
            setPassword("");
            fetchElus(); // Recharge la liste
        } catch (err) {
            setMessage("Erreur lors de la création de l’élu.");
            console.error(err);
        }
    };

    return (
        <div className="modal">
            <h2>Créer un élu</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Ajouter</button>
                {message && <p>{message}</p>}
            </form>

            <h3>Liste des élus</h3>
            <ul className="elus-list">
                {elus.map((elu) => (
                    <li key={elu.id}>
                        {elu.nom} {elu.prenom} - {elu.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreateEluPage;
