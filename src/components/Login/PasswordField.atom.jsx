import React from 'react';
import styles from './Login.module.css';

const PasswordField = ({ password, onChange }) => {
    if (!onChange) {
        return (<div>No onChange method supplied.</div>);
    }
    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
    };
    return (
        <div>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Enter your password"
            />
        </div>
    );
};
export default PasswordField;
