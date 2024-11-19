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
import React from 'react';
import styles from './Drill.module.css';

const LanguageSwitcherAtom = ({ onLanguageChange }) => {
    const handleLanguageSelect = (e) => {
        onLanguageChange(e.target.value);
    };

    return (
        <div className={styles.switcher}>
            <label>Select Language: </label>
            <select onChange={handleLanguageSelect}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
            </select>
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

    return (
        <div className={styles.card}>
            <p>{messages[language]}</p>
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
EOF
```

### CardAtom story <heredoc

```bash
cat > ./src/components/Drill/CardAtom.stories.jsx << 'EOF'
EOF
```
