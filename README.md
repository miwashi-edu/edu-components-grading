# 💡 edu-components-grading

## 👣 set up Component + Story + Styles

> This tutorial will scaffold a Styled Component together with Story, and style it. The purpose is to learn to always add module css, and CSS-inJS to evry component.  
> To achieve the grade of yellow belt you need to complete this task in 4 minutes using only [`bash`](https://www.gnu.org/s/bash/manual/bash.html) and [`vim`](https://www.vim.org).
> No copy paste i allowed!
> Grading must be performed before a `black belt`.
>   
> ![Tree diagram](./resources/tree.png)
>  
> ⚠️ **Notice**: You can use the `heredoc!` first time, but for grading you need to type it using Vim!
> ⚠️ **Notice**: You can use `heredoc` for Styled.module.css, it is not part of test!

### 📚 Instructions

#### 🦶 Scaffold Project

```bash
cd ~
cd ws
cd components-grading
mkdir -p ./src/components/Styled
touch ./src/components/Styled/index.js
touch ./src/components/Styled/Styled.jsx
touch ./src/components/Styled/Styled.module.css
touch ./src/components/Styled/Styled.styles.js
touch ./src/components/Styled/Styled.stories.jsx
```

#### 🦶 Component <heredoc

```bash
cat > ./src/components/Styled/Styled.jsx << 'EOF'
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
          CSS Module + CSS-in-JS Styled: {text}
        </div>
      </div>
  );
};

export default Styled;
EOF
```

#### 🦶 Storybook <heredoc

```bash
cat > ./src/components/Styled/Styled.stories.jsx << 'EOF'
import React from 'react';
import Styled from './Styled';

export default {
  title: 'Components/Styled',
  component: Styled,
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

#### 🦶 Module CSS <heredoc

⚠️ **Notice**: You can use the `heredoc!`!

```bash
cat > ./src/components/Styled/Styled.module.css << 'EOF'
.StyledContainer {
    border: 2px solid gray;
    padding: 20px;
    border-radius: 5px;
    margin: 10px;
    display: inline-block;
}

.StyledText {
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

#### 🦶 CSS-in-JS <heredoc

⚠️ **Notice**: The purpose here is to use simple css and learn the ternary operator!

```bash
cat > ./src/components/Styled/Styled.styles.js << 'EOF'
export const dynamicStyles = (fontSize) => ({
    dynamicText: {
        fontSize: fontSize ? `${fontSize}px` : '16px',
        transition: 'all 0.3s ease',
    },
});
EOF
```


---
---

## Bonus (not part of tutorial)

```bash
cat > ./src/info.mdx <<
# Welcome to components-grading
## Orange belt

On this level, we will learn to style a component.

Module CSS is a way to write scoped styles in CSS. It allows you to avoid global
namespace conflicts by ensuring that each component has its own isolated set of styles.
In a CSS Module, class names are automatically hashed to make them unique, preventing styling collisions across components.

CSS-in-JS refers to writing CSS directly inside your JavaScript code rather than in separate CSS files.
This approach allows you to create dynamic styles, based on JavaScript variables or props.

![Tree diagram](./resources/tree.png)

### File List:

- **index.js**
: It helps the bundler locate and load your components.

- **Component.mdx**
: The documentation file, which should describe the component’s functionality and usage.

- **Component.jsx**
: The component file, which should have a single responsibility and export the component by default for the bundler to locate.

- **Component.module.css**
: It is scoped to the component and uses its own namespace, preventing CSS collision.

- **Component.styles.js**
: It contains dynamic styles, *CSS-in-JS* and, while slower than .css, can offer more flexibility. It is typically used less frequently, but the file must exist for quality even when not used.

- **Component.stories.js**
: It contains test stories for your component, designed to test its robustness. If the component passes all tests without issues, it has succeeded.

**To grade yourself `Yellow Belt`, you should complete this task in 4 minutes using only Vim and a terminal.**. Grading must be performed before a `black belt`.
EOF
```

---
---

## 📋 You can clone and run this Tutorial from here

> ⚠️ **Warning**: This part is only if you start from here.

```bash
cd ~
[ -d ws ] && cd ws || { echo -e '\033[1;31mcreate workspace first!\033[0m'; return 1; }
rm -rf components-grading
git clone --single-branch --branch 2-Orange https://github.com/miwashi-edu/edu-components-grading.git components-grading
cd components-grading
rm -rf .git # Remove history
git init
git add .
git commit -m "Initial Commit"
npm install
```
```
