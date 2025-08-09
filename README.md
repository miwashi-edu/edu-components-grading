# 💡 edu-components-grading

## 👣 set up Component + Story

> This tutorial will scaffold a Sample Component together with Story.  
> Tools [`bash`](https://www.gnu.org/s/bash/manual/bash.html) and [`vim`](https://www.vim.org)  
> ![Tree diagram](./resources/tree.png)
>  
> ⚠️ **Notice**: You can use the `heredoc!` first time, but for grading you need to type it using Vim!`

### 📚 Instructions

#### 🦶 Scaffold Project

```bash
cd ~
cd ws
cd components-grading
mkdir -p ./src/components/Sample
touch ./src/components/index.js
touch ./src/components/Sample.jsx
touch ./src/components/Sample.module.css
touch ./src/components/Sample.styles.js
touch ./src/components/Sample.stories.jsx
```

#### 🦶 Component <heredoc

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

#### 🦶 Storybook <heredoc

> ``Component Story Format` (`CSF`)

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

#### 🦶 Barrel File <heredoc

```bash
cat > ./src/components/Sample/index.js << 'EOF'
export {default as Sample} from './Sample";
EOF
```

#### 🦶 Add help bundler find file from components, and src

```bash
cat > ./src/components/index.js << 'EOF'
export {Sample} from './components/Sample";

cat > ./src/index.js << 'EOF'
export {Sample} from './components";
EOF
```

#### ▶️ Try it

```
npm run storybook
```


#### 🔄 Repeat trail

```bash
git reset --hard
git clean -df
```

#### ✅ End trail

```bash
git add .
git commit -m "Sample component done"
```

---
---

# 📋 You can clone and run this Tutorial from here

> ⚠️ **Warning**: This part is only if you start from here.

```bash
cd ~
[ -d ws ] && cd ws || { echo -e '\033[1;31mcreate workspace first!\033[0m'; return 1; }
rm -rf components-grading
git clone --single-branch --branch 1-Yellow https://github.com/miwashi-edu/edu-components-grading.git components-grading
cd components-grading
rm -rf .git # Remove history
git init
git add .
git commit -m "Initial Commit"
npm install
```
