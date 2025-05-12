import React, { useState } from 'react';
import AccueilPage from "./AcceuilPage.jsx";
import EluPage from "./EluPage.jsx";


export default function DashboardPage() {
    const [pageActive, setPageActive] = useState('accueil');

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
            alignItems: 'center',
            width: '20%',
            background: 'rgba(0,0,0,0.2)',
            paddingTop: '2rem',
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
            case 'elus': return <EluPage />;
            default: return <div>Page non trouvée</div>;
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.menu}>
                <div style={styles.logo}>🤖 Connexion</div>

                <div style={styles.menuItem} onClick={() => setPageActive('accueil')} >🏠 Accueil</div>
                <div style={styles.menuItem} onClick={() => setPageActive('elus')}>🧑‍⚖️ Elus</div>
                <div style={styles.menuItem} onClick={() => setPageActive('notifications')}>🔔 Notifications</div>
                <div style={styles.menuItem} onClick={() => setPageActive('recherche')}>🔍 Recherche</div>
                <div style={styles.menuItem} onClick={() => setPageActive('create')}>➕ Créer</div>
                <div style={styles.menuItem} onClick={() => setPageActive('statistiques')}>📊 Statistiques</div>
                <div style={styles.menuItem} onClick={() => setPageActive('help)')}>❓ Aide</div>
                <div style={styles.menuItem} onClick={() => setPageActive('settings')}>⚙️ Paramètres</div>
                <div style={styles.menuItem} onClick={() => setPageActive('profil')}>👤 Profil</div>
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