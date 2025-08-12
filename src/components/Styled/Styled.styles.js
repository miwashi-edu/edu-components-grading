export const dynamicStyles = (fontSize) => ({
    dynamicText: {
        fontSize: fontSize ? `${fontSize}px` : '16px',
        transition: 'all 0.3s ease',
    },
});
