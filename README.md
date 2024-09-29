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



