import React from 'react';
import styles from './Drill.module.css';

const Card = ({ language }) => {
    const messages = {
        en: 'Hello!',
        fr: 'Bonjour!',
        es: '¡Hola!'
    };

    const defaultMessage = 'Language not supported';
    const message = messages[language] || defaultMessage;

    return (
        <div className={styles.card}>
            <p>{message}</p>
        </div>
    );
};

export default Card;
