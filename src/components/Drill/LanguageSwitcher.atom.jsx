import React, { useState } from 'react';
import styles from './Drill.module.css';

const LanguageSwitcher = ({ onLanguageChange }) => {
    const [error, setError] = useState(false);

    const handleLanguageSelect = (e) => {
        if (typeof onLanguageChange === 'function') {
            setError(false);
            onLanguageChange(e.target.value);
        } else {
            setError(true);
        }
    };

    return (
        <div className={styles.switcher}>
            <label>Select Language: </label>
            <select onChange={handleLanguageSelect}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
            </select>
            {error && <p className={styles.error}>Error: No language change function provided!</p>}
        </div>
    );
};

export default LanguageSwitcher;
