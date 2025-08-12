import React, { useState } from 'react';
import PasswordField from './PasswordField.atom';
export default {
    title: 'Components/Login/PasswordField',
    component: PasswordField,
};
export const Default = () => {
    const [password, setPassword] = useState('');
    const handleChange = (newPassword) => {
        console.log('setPassword called with:', newPassword);
        setPassword(newPassword);
    };
    return (
        <PasswordField
            password={password}
            onChange={handleChange}
        />
    );
};
export const NoOnChangeProvided = {};
