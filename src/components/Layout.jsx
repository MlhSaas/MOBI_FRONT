import React from 'react';
import '../styles/layout.css';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="logo">mobi-lise</h2>
        <nav>
          <ul>
            <li>🏠 Accueil</li>
            <li>🧑‍⚖️ Elus</li>
            <li>🔔 Notifications</li>
            <li>🔍 Recherche</li>
            <li>➕ Créer</li>
            <li>📊 Statistiques</li>
            <li>❓ Aide</li>
            <li>⚙️ Paramètres</li>
            <li>👤 Profil</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
