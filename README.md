# edu-components-grading

## set up Component + module css + css-in-js + guards + stories

> Create a Sample Component together with Story.
> Tools `bash + vim`

```bash
cd ~
cd ws
mkdir components-grading
cd components-grading
```

## Component <heredoc

```bash
cat > ./src/components/Sample/Sample.jsx << 'EOF'
import React from 'react';
import styles from './Sample.module.css';
import { dynamicStyles } from './Sample.styles.js';

const Sample = ({ text, fontSize }) => {

  if (typeof text !== 'string') {
    console.error("Invalid prop type: `text` should be a string.");
    return <div className={styles.errorText}>Invalid text prop provided!</div>;
  }

  const dynamicStyle = dynamicStyles(fontSize);

  return (
      <div className={styles.sampleContainer}>
        <div className={styles.sampleText} style={dynamicStyle.dynamicText}>
          CSS Module + CSS-in-JS Styled: {text}
        </div>
      </div>
  );
};

export default Sample;
EOF
```

## Storybook <heredoc

```bash
cat > ./src/components/Sample/Sample.stories.jsx << 'EOF'
import React from 'react';
import Sample from './Sample';

export default {
  title: 'Components/Sample',
  component: Sample,
  parameters: {
    docs: {
      description: {
        component: 'This component uses a combination of CSS Modules for core styling and CSS-in-JS for dynamic styling based on props.',
      },
    },
  },
};

// Story: Default with valid prop
export const Default = {
  args: {
    text: "Hello, Storybook!",
    fontSize: 16,
  },
};

// Story: Large font size to test dynamic styling
export const LargeText = {
  args: {
    text: "Large Font Text",
    fontSize: 24,
  },
};

// Story: Invalid prop to trigger guard
export const InvalidProp = {
  args: {
    text: 123, // Invalid type to trigger error handling
  },
};
EOF
```

## Module CSS <heredoc

```bash
cat > ./src/components/Sample/Sample.module.css << 'EOF'
.sampleContainer {
    border: 2px solid gray;
    padding: 20px;
    border-radius: 5px;
    margin: 10px;
    display: inline-block;
}

.sampleText {
    color: blue;
    font-size: 16px;
    padding: 10px;
    border: 1px solid lightgray;
}

.errorText {
    color: red;
    border: 1px dashed red;
    padding: 5px;
    font-weight: bold;
}
EOF
```

## CSS-in-JS <heredoc

```bash
cat > ./src/components/Sample/Sample.styles.js << 'EOF'
export const dynamicStyles = (fontSize) => ({
    dynamicText: {
        fontSize: fontSize ? `${fontSize}px` : '16px',
        transition: 'all 0.3s ease',
    },
});
EOF
```
