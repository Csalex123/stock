import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundView = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <h1 style={{
                color: '#09f',
                fontWeight: 'bold',
                fontSize: '50px'
            }}>404</h1>
            <p>Não encontrado. </p>
            <Link
                to='/'
                style={{
                    color: '#09f',
                    textDecoration: 'none',
                    fontSize: '15px',
                    marginTop: '10px'
                }}
            >
                Voltar para a home
            </Link>
        </div>
    );
}

export default NotFoundView;
