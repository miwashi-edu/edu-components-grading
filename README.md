# edu-components-grading

## set up Component + Story

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
cd ..
cd ..
cd ..
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
är samma som
import Sample from './components/Sample.jsx";
export {Sample}
EOF
```

## Add component to package barrel file <heredoc

```bash
cat > ./src/index.js << 'EOF'
import Sample from './components/Sample";
är samma som
import Sample from './components/Sample/index.js";
export {Sample}
EOF
```
