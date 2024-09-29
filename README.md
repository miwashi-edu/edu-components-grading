# edu-components-grading

## set up project

```bash
cd ~
cd ws
mkdir components-grading
cd components-grading
git init
echo '# components-grading' > README.md
git add .
git commit -m "Initial Commit"
```

### Add git Ignore

> This part you can copy paste, or just write the parts you remember.

```bash
cat > .gitignore << 'EOF'
# Node modules and dependencies
node_modules/
.pnp/
.pnp.js

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build and Storybook output directories
build/
dist/
storybook-static/

# Logs and temporary files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log

# IDE/Editor specific files
.vscode/
.idea/
.DS_Store

# Coverage reports
coverage/

# Miscellaneous
*.lock
EOF
git add .gitignore
git commit -m "Added git ignore"
```



## set up node package and react

> Create an empty npm package

```bash
npm init -y
mkdir src
touch ./src/index.js
npm pkg set main='./src/index.js' 
mkdir ./src/components
```

## Set up storybook

> This will end in: `Couldn't find any stories in your Storybook.` as we have an empty storybook.
> Next trail will add our first story.

```bash
npx storybook init --builder webpack5 --type react --skip-install # or --builder vite 
rm -rf ./src/stories
npm install
npm run storybook
```

<hr>

# Component + Story

> Create a Sample Component together with Story.
> Tools `bash + vim`

```bash
cd ~
cd ws
mkdir components-grading
cd components-grading
mkdir -p ./src/components/Sample
cd ./src/components/Sample
touch index.js
touch Sample.jsx
touch Sample.module.css
touch Sample.styles.js
touch Sample.stories.jsx
```

## Component <heredoc

```bash
cat > ./src/components/Sample/Sample.jsx << 'EOF'
import React from 'react';

const Sample = () => {
  return(
    <>Sample</>
  );
}

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
}

export const Default = {
}
EOF
```

## Barrel File <heredoc

```bash
cat > ./src/components/Sample/index.js << 'EOF'
import Sample from './Sample";

export {Sample}
EOF
```

## Add component to package barrel file <heredoc

```bash
cat > ./src/index.js << 'EOF'
import Sample from './components/Sample";

export {Sample}
EOF
```


<hr>

# Component + module css + css-in-js + guards + stories

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
