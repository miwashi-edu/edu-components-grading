import React from 'react';
import styles from './Login.module.css';

const LoginButton = ({ onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            alert('No login method provided');
        }
    };

    return (
        <button type="button" className={styles.button} onClick={handleClick}>
            Login
        </button>
    );
};

export default LoginButton;
