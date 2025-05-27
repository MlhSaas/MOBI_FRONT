import React, {useEffect, useState} from 'react';
import AccueilPage from "./AcceuilPage.jsx";
import EluPage from "./EluPage.jsx";
import {useNavigate} from "react-router-dom";
import CreateEluPage from "./createEluPage.jsx";
import logout from "../services/loginPageService.js"
import authService from "../services/loginPageService.js";


export default function DashboardPage() {
    const [pageActive, setPageActive] = useState('accueil');
    const navigate = useNavigate();
    const [bouttonActive, setBouttonActive] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            console.log('no no nno');
        }
    }, [navigate]);

    const handleLogout = () => {
        authService.logout();
        navigate("/");
    };

    const styles = {
        page: {

            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            color: 'white',
            fontFamily: 'sans-serif',
            border : '1px solid #ccc',
            borderRadius: '16px',
            padding: '16px',
        },
        menu: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'right',
            width: '20%',
            background: 'rgba(0,0,0,0.2)',
            padding: '2rem',

        },
        logo: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '2rem',
        },
        menuItem: {
            cursor: 'pointer',
            margin: '1rem 0',
            fontSize: '18px',
        },

        activeMenuItem: {
            color: '#00f2fe',
            fontWeight: 'bold',
            borderLeft: '4px solid #00f2fe',
            paddingLeft: '8px',

        },
        container: {
            flex: 1,
            backgroundColor : 'white',
            padding: '2rem',
            overflowY: 'auto',
        },
        header : {
            height: '30px',
            background: 'rgba(0,0,0,0.2)',
            padding: '1rem',
        },

        right :{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',

        }
    };

    const renderPage = () => {
        switch (pageActive) {
            case 'accueil': return <AccueilPage />;
            case 'elus': return <CreateEluPage />;
            default: return <div>Page non trouvée</div>;
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.menu}>
                <div style={styles.logo}>🤖 Connexion</div>
                <div  style={{...styles.menuItem,...(pageActive === 'accueil' ? styles.activeMenuItem : {})}} onClick={() => setPageActive('accueil')}>🏠 Accueil</div>
                <div  style={{...styles.menuItem, ...(pageActive === 'elus' ? styles.activeMenuItem : {})}} onClick={()=> setPageActive('elus')}>🧑‍⚖️ Elus</div>
                <div  style={{...styles.menuItem, ...(pageActive === 'notifications' ? styles.activeMenuItem : {})}} onClick={()=> setPageActive('notifications')}>🔔 Notifications</div>
                <div  style={{...styles.menuItem, ...(pageActive === 'recherche' ? styles.activeMenuItem : {})}} onClick={()=> setPageActive('recherche')}>🔍 Recherche</div>
                <div  style={{...styles.menuItem, ...(pageActive === 'create' ? styles.activeMenuItem : {})}} onClick={()=> setPageActive('create')}>➕ Créer</div>
                <div  style={{...styles.menuItem, ...(pageActive === 'statistiques' ? styles.activeMenuItem : {})}} onClick={()=> setPageActive('statistiques')}>📊 Statistiques</div>
                <div  style={{...styles.menuItem, ...(pageActive === 'help' ? styles.activeMenuItem : {})}} onClick={()=> setPageActive('help')}>❓ Aide</div>
                <div  style={{...styles.menuItem, ...(pageActive === 'settings' ? styles.activeMenuItem : {})}} onClick={()=> setPageActive('settings')}>⚙️ Paramètres</div>
                <div  style={{...styles.menuItem, ...(pageActive === 'profil' ? styles.activeMenuItem : {})}} onClick={()=> setPageActive('profil')}>👤 Profil</div>
                <div style={styles.menuItem} onClick={handleLogout} > 🔚Deconnexion</div>
            </div>
            <div style={styles.right}>
                <div style={styles.header}>
                </div>
                <div style={styles.container}>
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}