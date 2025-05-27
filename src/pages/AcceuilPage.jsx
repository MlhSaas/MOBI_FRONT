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

    if (posts.length === 0) {
        return (
            <div style={{textAlign: 'center', marginTop: '5rem'}}>
                <img src={amico} alt="robot" width="150"/>
                <h3 style={{color: 'black'}}>Vous n’avez pas de Publication</h3>
            </div>
        );
    }

    return (
        <div>
            <h2>Dernières publications</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                }}
            >
                {posts.map((post) => {
                    let title, content;

                    switch (post.type_post) {
                        case 'article':
                            title = "Article";
                            content = post.article ? post.article.texte : "Pas de contenu";
                            break;
                        case 'vote':
                            title = "Vote";
                            content = post.vote ? post.vote.texte : "Pas de contenu";
                            break;
                        case 'info':
                            title = "Info";
                            content = post.info ? (post.info.lien || post.info.video) : "Pas de contenu";
                            break;
                        case 'sondage':
                            title = "Sondage";
                            content = post.sondage ? post.sondage.lien : "Pas de contenu";
                            break;
                        default:
                            title = "Post";
                            content = "Type inconnu";
                    }

                    return (
                        <div
                            key={post.id}
                            style={{
                                color: 'black',
                                background: 'rgba(255,255,255,0.1)',
                                padding: '1rem',
                                borderRadius: '8px',
                            }}
                        >
                            <h4>{title}</h4>
                            <p>{content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
