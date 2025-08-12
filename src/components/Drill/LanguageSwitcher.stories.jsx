import React from 'react';
import LanguageSwitcher from './LanguageSwitcher.atom';

export default {
    title: 'Drill/LanguageSwitcher',
    component: LanguageSwitcher,
};

export const Default = {
    args: {
        onLanguageChange: (language) => console.log('Language selected:', language)
    }
};

export const MissingChangeLanguageFunction = {
    args: {}
};
