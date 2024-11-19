# edu-components-grading

## State lifting & State propagating

### Scaffold Drill component

```bash
cd ~
cd ws
cd components-grading
mkdir ./src/components/Drill
touch ./src/components/Drill/index.js
touch ./src/components/Drill/Drill.module.css
touch ./src/components/Drill/Drill.styles.js
touch ./src/components/Drill/DrillMolecule.jsx
touch ./src/components/Drill/LanguageSwitcherAtom.jsx
touch ./src/components/Drill/CardAtom.jsx
touch ./src/components/Drill/DrillMolecule.stories.jsx
touch ./src/components/Drill/CardAtom.stories.jsx
touch ./src/components/Drill/LanguageSwitcherAtom.stories.jsx
touch ./src/components/Drill/CardAtom.stories.jsx
```

### Barrel file <heredoc

```bash
cat > ./src/components/Drill/index.js << 'EOF'
import DrillMolecule from './DrillMolecule';
export {DrillMolecule as Drill}
EOF
```

### DrillMolecule file <heredoc

```bash
cat > ./src/components/Drill/DrillMolecule.jsx << 'EOF'
import React, { useState } from 'react';
import LanguageSwitcherAtom from './LanguageSwitcherAtom';
import CardAtom from './CardAtom';
import styles from './Drill.module.css';

const DrillMolecule = () => {
    const [language, setLanguage] = useState('en');  // State lifted to parent

    const handleLanguageSwitch = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <div className={styles.drillContainer}>
            <LanguageSwitcherAtom onLanguageChange={handleLanguageSwitch} />
            <CardAtom language={language} />
        </div>
    );
};

export default DrillMolecule;
EOF
```


### LanguageSwitcherAtom file <heredoc

```bash
cat > ./src/components/Drill/LanguageSwitcherAtom.jsx << 'EOF'
import React, { useState } from 'react';
import styles from './Drill.module.css';

const LanguageSwitcherAtom = ({ onLanguageChange }) => {
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

export default LanguageSwitcherAtom;
EOF
```


### CardAtom file <heredoc

```bash
cat > ./src/components/Drill/CardAtom.jsx << 'EOF'
import React from 'react';
import styles from './Drill.module.css';

const CardAtom = ({ language }) => {
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

export default CardAtom;
EOF
```

### Drill.module.css

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

### DrillMolecule story <heredoc

```bash
cat > ./src/components/Drill/DrillMolecule.stories.jsx << 'EOF'
import React from 'react';
import {Drill} from './index';

export default {
    title: 'Drill/Drill',
    component: Drill,
};

export const Default = {
}
EOF
```

### LanguageSwitcherAtom story <heredoc

```bash
cat > ./src/components/Drill/LanguageSwitcherAtom.stories.jsx << 'EOF'
import React from 'react';
import LanguageSwitcherAtom from './LanguageSwitcherAtom';

export default {
    title: 'Drill/LanguageSwitcherAtom',
    component: LanguageSwitcherAtom,
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

### CardAtom story <heredoc

```bash
cat > ./src/components/Drill/CardAtom.stories.jsx << 'EOF'
import React from 'react';
import CardAtom from './CardAtom';

export default {
    title: 'Drill/CardAtom',
    component: CardAtom,
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
