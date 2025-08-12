import React from 'react';
import styles from './Login.module.css';

const UserField = ({ username, onChange }) => {
    if (!onChange) {
        return (<div>No onChange method supplied.</div>);
    }
    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
    };

    return (
        <div>
            <label className={styles.label} htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={username}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Enter your username"
            />
        </div>
    );
};

export default UserField;
