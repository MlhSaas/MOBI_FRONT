import React, { useEffect, useState } from 'react';
import acceuilService from '../services/acceuilService';
import amico from "../assets/images/amico.png";

export default function AccueilPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('token');
                const data = await acceuilService.getPostsByCollectivite(token);
                setPosts(data.slice(0, 4));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <p>Chargement...</p>;

    return posts.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <img src={amico} alt="robot" width="150" />
            <h3 style={{ color : 'black'}}>Vous n’avez pas de Publication</h3>
        </div>
    ) : (
        <div>
            <h2>Dernières publications</h2>
            {posts.map((post, index) => (
                <div key={index} style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

