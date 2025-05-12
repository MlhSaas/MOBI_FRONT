import React from "react";
import createEluBg from "../assets/images/createEluBg.png";
import "../styles/createEluPage.css";
import Layout from "../components/Layout";

const CreateEluPage = () => {
  return (
    <div
      className="create-elu-container"
      style={{
        backgroundImage: `url(${createEluBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="modal">
        <h2>Page de création d'un élu</h2>
        <form>
          <div className="form-group">
            <label>Entrez votre nom</label>
            <input type="text" placeholder="Entrez le nom" />
          </div>
          <div className="form-group">
            <label>Entrez votre prenom</label>
            <input type="text" placeholder="Entrez votre prenom" />
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEluPage;
