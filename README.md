# edu-components-grading

## 👣 Create Component for State lifting & State propagating

### 📚 State lifting

> State Lifting in React refers to the process of moving state from a child component to a common parent component in order to share data or allow multiple child
> components to access and modify the same state. When two or more child components need to share state or communicate with each other,
> it's often better to lift the state to their **nearest common ancestor** (the parent component).
> The parent then passes the state down to its children via props, and the children can trigger updates by calling functions passed down as `props`.
>   
> This is particularly useful when managing form data, coordinating interactions between components, or synchronizing UI elements.

### 📚 State Propagation

> State Propagating in React refers to the process of passing state values from a parent component down to one or more child components so
> they can render or behave based on that state. Instead of moving state upward (as in state lifting), state propagation is about distributing
> existing state from its owner to all components that need it.
>
> The parent component owns the state and sends it to children through props. Those children can use the state directly, and if changes are needed,
> they trigger updates by calling callback functions also passed down from the parent.
> State propagation is especially useful when you need multiple parts of the UI to stay in sync with a single source of truth — for example,
> toggling a theme, enabling/disabling inputs, or displaying shared user information across several components.


### 📚 Instructions

> In this trail, we will lift state from the **LanguageSwitcher**, and propagate it to **Card**, to display the result in the **Drill** component.
> The state is owned by the Drill component.
>
> To achieve the grade of `blue belt` you need to complete this task in 15 minutes using only [`bash`](https://www.gnu.org/s/bash/manual/bash.html) and [`vim`](https://www.vim.org).
> No copy paste i allowed!  
> CSS is not part of the grading!  
> Grading must be performed before a `black belt`.

#### 🦶 Scaffold Drill component

```bash
cd ~
cd ws
cd components-grading
mkdir ./src/components/Drill
touch ./src/components/Drill/index.js
touch ./src/components/Drill/Drill.module.css
touch ./src/components/Drill/Drill.styles.js
touch ./src/components/Drill/LanguageSwitcher.atom.jsx
touch ./src/components/Drill/Card.atom.jsx
touch ./src/components/Drill/Drill.molecule.jsx
touch ./src/components/Drill/LanguageSwitcher.stories.jsx
touch ./src/components/Drill/Card.stories.jsx
touch ./src/components/Drill/Drill.stories.jsx
```


#### 🦶 Barrel files

```bash
cat > ./src/components/Drill/index.js << 'EOF'
export {default as Drill} from './Drill.molecule.jsx';
EOF

cat >> ./src/components/index.js << 'EOF'
export {Drill} from './Drill';
EOF

cat >> ./src/index.js << 'EOF'
export {Drill} from './components';
EOF
```

#### 🦶 LanguageSwitcher

##### Component

```bash
cat > ./src/components/Drill/LanguageSwitcher.atom.jsx << 'EOF'
import React, { useState } from 'react';
import styles from './Drill.module.css';

const LanguageSwitcher = ({ onLanguageChange }) => {
    const [error, setError] = useState(false);

    const handleLanguageSelect = (e) => {
        if (typeof onLanguageChange === 'function') {
            setError(false);
            onLanguageChange(e.target.value);
        } else {
            setError(true);
        }
    };

    return (
        <div className={styles.switcher}>
            <label>Select Language: </label>
            <select onChange={handleLanguageSelect}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
            </select>
            {error && <p className={styles.error}>Error: No language change function provided!</p>}
        </div>
    );
};

export default LanguageSwitcher;
EOF
```

##### Storybook

```bash
cat > ./src/components/Drill/LanguageSwitcher.stories.jsx << 'EOF'
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
EOF
```

#### 🦶 Card

##### Component

```bash
cat > ./src/components/Drill/Card.atom.jsx << 'EOF'
import React from 'react';
import styles from './Drill.module.css';

const Card = ({ language }) => {
    const messages = {
        en: 'Hello!',
        fr: 'Bonjour!',
        es: '¡Hola!'
    };

    const defaultMessage = 'Language not supported';
    const message = messages[language] || defaultMessage;

    return (
        <div className={styles.card}>
            <p>{message}</p>
        </div>
    );
};

export default Card;
EOF
```

##### Storybook

```bash
cat > ./src/components/Drill/Card.stories.jsx << 'EOF'
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
EOF
```

#### 🦶 Drill

##### Component

```bash
cat > ./src/components/Drill/Drill.molecule.jsx << 'EOF'
import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher.atom';
import Card from './Card.atom';
import styles from './Drill.module.css';

const Drill = () => {
    const [language, setLanguage] = useState('en');  // State lifted to parent

    const handleLanguageSwitch = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div className={styles.drillContainer}>
            <LanguageSwitcher onLanguageChange={handleLanguageSwitch} />
            <Card language={language} />
        </div>
    );
};

export default Drill;
EOF
```

##### Storybook

```bash
cat > ./src/components/Drill/Drill.stories.jsx << 'EOF'
import React from 'react';
import {Drill} from './index';

export default {
    title: 'Drill',
    component: Drill,
};

export const Default = {
}
EOF
```
---

## CSS (not part of tutorial)

⚠️ **Notice**: You can use `heredoc` for Login.module.css, it is not part of test!

```css
cat > ./src/components/Drill/Drill.module.css << 'EOF'
.drillContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.switcher {
    margin-bottom: 20px;
}

.card {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    background-color: #f9f9f9;
}

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
git clone --single-branch --branch 4-Blue https://github.com/miwashi-edu/edu-components-grading.git components-grading
cd components-grading
rm -rf .git # Remove history
git init
git add .
git commit -m "Initial Commit"
npm install
```
