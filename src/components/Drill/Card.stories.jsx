import React from 'react';
import Card from './Card.atom';

export default {
    title: 'Drill/Card',
    component: Card,
};

export const Default = {
    args: {
        language: 'en',
    },
};

export const French = {
    args: {
        language: 'fr',
    },
};

export const Spanish = {
    args: {
        language: 'es',
    },
};

export const MissingLanguage = {
    args: {},
};
