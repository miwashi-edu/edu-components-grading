import React from 'react';
import styles from './Styled.module.css';
import { dynamicStyles } from './Styled.styles.js';

const Styled = ({ text, fontSize }) => {

  if (typeof text !== 'string') {
    console.error("Invalid prop type: `text` should be a string.");
    return <div className={styles.errorText}>Invalid text prop provided!</div>;
  }

  const dynamicStyle = dynamicStyles(fontSize);

  return (
      <div className={styles.StyledContainer}>
        <div className={styles.StyledText} style={dynamicStyle.dynamicText}>
          Styled: {text}
        </div>
      </div>
  );
};

export default Styled;
