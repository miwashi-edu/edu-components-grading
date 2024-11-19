# edu-components-grading

## State lifting & State propagating

### Scaffold Drill component

```bash
cd ~
cd ws
cd components-grading
mkdir ./src/components/Drill
touch ./src/components/index.js
touch ./src/components/Drill.module.css
touch ./src/components/Drill.styles.js
touch ./src/components/DrillMolecule.jsx
touch ./src/components/LanguageSwitcherAtom.jsx
touch ./src/components/CardAtom.jsx
touch ./src/components/DrillMolecule.stories.jsx
touch ./src/components/CardAtom.stories.jsx
touch ./src/components/LanguageSwitcherAtom.stories.jsx
touch ./src/components/CardAtom.stories.jsx
```

### Barrel file <heredoc

```bash
cat > ./src/components/Drill/index.js << 'EOF'
import DrillMolecule from './DrillMolecule";
export {DrillMolecule as Drill}
EOF
```

### DrillMolecule file <heredoc

```bash
cat > ./src/components/Drill/DrillMolecule.jsx << 'EOF'
EOF
```


### LanguageSwitcherAtom file <heredoc

```bash
cat > ./src/components/Drill/LanguageSwitcherAtom.jsx << 'EOF'
EOF
```


### CardAtom file <heredoc

```bash
cat > ./src/components/Drill/CardAtom.jsx << 'EOF'
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
