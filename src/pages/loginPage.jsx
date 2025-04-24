import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/loginPageService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await authService.login(email, password);
            console.log('Connexion réussie:', data);
            navigate('/'); // ← Redirection après connexion
        } catch (error) {
            setError('Email ou mot de passe incorrect');
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: '#f5f5f5',
        },
        left: {
            flex: 1,
            backgroundColor: '#e0e0e0',
        },
        right: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            padding: '40px',
        },
        formWrapper: {
            width: '100%',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
        title: {
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '12px',
            marginBottom: '16px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc',
            outline: 'none',
        },
        button: {
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            background: 'linear-gradient(to right, #4facfe, #00f2fe)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '16px',
        },
        separator: {
            textAlign: 'center',
            margin: '16px 0',
            color: '#888',
        },
        socialButtons: {
            display: 'flex',
            gap: '10px',
            marginBottom: '16px',
            width: '100%',
        },
        socialBtn: {
            flex: 1,
            padding: '10px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: '#fff',
        },
        terms: {
            fontSize: '12px',
            color: '#777',
            textAlign: 'center',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        errorMessage: {
            color: 'red',
            marginBottom: '16px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.left}>
                <img
                    style={styles.image}
                    src="https://i.pinimg.com/736x/8b/e9/e0/8be9e01a27d320a1d88970541ac9206a.jpg"
                    alt="login visual"
                />
            </div>
            <div style={styles.right}>
                <form onSubmit={handleLogin}>
                    <div style={styles.formWrapper}>
                        <h2 style={styles.title}>Sign In</h2>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                            Connecte toi avec ton email
                        </p>
                        <input
                            type="email"
                            placeholder="machevoutsa@gmail.com"
                            style={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                            Mot de passe
                        </p>
                        <input
                            type="password"
                            placeholder="luxEstCOOLXD"
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <p style={styles.errorMessage} aria-live="assertive">{error}</p>}
                        <button type="submit" style={styles.button}>Sign In</button>
                        <div style={styles.separator}>Or continue with</div>
                        <div style={styles.socialButtons}>
                            <button type="button" style={styles.socialBtn}>Google</button>
                            <button type="button" style={styles.socialBtn}>Facebook</button>
                        </div>
                        <p style={styles.terms}>
                            By registering you agree to our{' '}
                            <span style={{ color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}>
                                Terms and Conditions
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
