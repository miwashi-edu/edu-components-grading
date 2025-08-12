# 💡 edu-components-grading

## 👣 Create three Structural Adapters

### 📚 Structural adapter

> A structural adapter uses external JSON data to define and construct its own structure. This JSON is typically provided by a RESTful
> backend web service and describes how the adapter should assemble and configure its internal layout.
> A structural adapter can be customized through HTML or configuration to use different components in its structure,
> allowing dynamic UI composition without changing the underlying code.


```html
<FlexGridStructure data={providedData}>
  <Card />
</FlexGridStructure>
```


```html
<FlexGridStructure data={providedData}>
  <InfoBox />
</FlexGridStructure>
```

```html
<RecursiveStructure data={directoryStructure}>
  <DirectoryInfo />
</RecursiveStructure>
```

### 📚 Instructions

> In this trail, we will lift state from the **LanguageSwitcher**, and propagate it to **Card**, to display the result in the **Drill** component.
> The state is owned by the Drill component.
>
> To achieve the grade of `blue belt` you need to complete this task using only [`bash`](https://www.gnu.org/s/bash/manual/bash.html) and [`vim`](https://www.vim.org).
> There is no time limit!
> No copy paste i allowed!  
> CSS is not part of the grading!  
> Grading must be performed before a `black belt`.

### Scaffold Structural Adapters module

```bash
cd ~
cd ws
cd components-grading
mkdir ./src/components/StructuralAdapter
touch ./src/components/StructuralAdapter/index.js
touch ./src/components/StructuralAdapter/StructuralAdapter.module.css
touch ./src/components/StructuralAdapter/StructuralAdapter.styles.js
touch ./src/components/StructuralAdapter/FlexGridStructure.jsx
touch ./src/components/StructuralAdapter/RecursiveStructure.jsx
touch ./src/components/StructuralAdapter/Card.jsx
touch ./src/components/StructuralAdapter/InfoBox.jsx
touch ./src/components/StructuralAdapter/DirectoryInfo.jsx
touch ./src/components/StructuralAdapter/FlexGridStructure.stories.jsx
touch ./src/components/StructuralAdapter/RecursiveStructure.stories.jsx
touch ./src/components/StructuralAdapter/Card.stories.jsx
touch ./src/components/StructuralAdapter/InfoBox.stories.jsx
touch ./src/components/StructuralAdapter/DirectoryInfo.stories.jsx
touch ./src/components/StructuralAdapter/recursiveDirectoryData.json
touch ./src/components/StructuralAdapter/recursiveNodeData.json
touch ./src/components/StructuralAdapter/flexboxDirectoryData.json
touch ./src/components/StructuralAdapter/flexboxCardData.json
touch ./src/components/StructuralAdapter/flexboxInfoData.json
touch ./src/components/StructuralAdapter/
```

### Structural Adapters

#### FlexGridStructure

##### Component

```bash
cat > ./src/components/StructuralAdapter/FlexGridStructure.jsx << 'EOF'
EOF
```

##### Story

```bash
cat > ./src/components/StructuralAdapter/FlexGridStructure.stories.jsx << 'EOF'
EOF
```

#### FlexBoxStructure

##### Component

```bash
cat > ./src/components/StructuralAdapter/FlexBoxStructure.jsx << 'EOF'
import React from 'react';
import styles from './StructuralAdapter.module.css';

const FlexBoxStructure = ({ config, data, children }) => {
    if (!data || data.length === 0) return <div>No data provided</div>;
    const { direction = 'column', justify = 'flex-start', align = 'center', wrap = 'nowrap', gap = '0px' } = config;

    return (
        <ul className={styles.flexContainer} style={{
            display: 'flex',
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap,
            gap: gap,
            padding: 0,
            listStyleType: 'none'
        }}>
            {data.map((item, index) => (
                <li key={index} className={styles.flexItem}>
                    {React.cloneElement(children, { ...item })}
                </li>
            ))}
        </ul>
    );
};

export default FlexBoxStructure;
EOF
```

##### Story

```bash
cat > ./src/components/StructuralAdapter/FlexBoxStructure.stories.jsx << 'EOF'
import React from 'react';
import FlexBoxStructure from './FlexBoxStructure';
import Card from './Card';
import DirectoryInfo from './DirectoryInfo';
import InfoBox from "./InfoBox";
import providedCardData from './flexboxCardData.json';
import providedDirectoryData from './flexboxDirectoryData.json';
import providedInfoData from './flexboxInfoData.json';

export default {
    title: 'StructuralAdapter/FlexBoxStructure',
    component: FlexBoxStructure,
};

const config = {direction: 'row', justify: 'space-around', align: 'center', wrap: 'wrap', gap: '15px'};

export const Default = {
    args: {config: config, data: providedCardData, children: <Card />,}
};

export const WithDirectoryInfo = {
    args: {
        config: config, data: providedDirectoryData, children: <DirectoryInfo />,
    }
};

export const WithInfoBox = {
    args: {
        config: config, data: providedInfoData, children: <InfoBox />,
    }
};
EOF
```

#### RecursiveStructure

##### Component

```bash
cat > ./src/components/StructuralAdapter/RecursiveStructure.jsx << 'EOF'
import React from 'react';
import styles from './StructuralAdapter.module.css';

const RecursiveStructure = ({ node, children, depth = 0 }) => {
    if (!node) return <>Missing data</>;
    const isRecursive = Array.isArray(node.nodes);
    const baseMultiplier = 10 ** depth;
    const { nodes, ...nodeProps } = node;

    return (
        <div className={styles.nodeContainer}>
            {children ? React.Children.map(children, (child) =>
                React.cloneElement(child, { ...nodeProps })
            ) : <div>{depth} Missing child tag</div>}
            {isRecursive && (
                <ul>
                    {node.nodes.map((child, index) => (
                        <li key={index * baseMultiplier + 1} className={styles.nodeItem}>
                            <RecursiveStructure node={child} depth={depth + 1}>
                                {children}
                            </RecursiveStructure>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecursiveStructure;
EOF
```

##### Story

```bash
cat > ./src/components/StructuralAdapter/RecursiveStructure.stories.jsx << 'EOF'
import React from 'react';
import RecursiveStructure from "./RecursiveStructure.jsx";
import Node from "./Node";
import DirectoryInfo from "./DirectoryInfo";
import providedDirectoryData from './directoryData.json';
import providedNodeData from './nodeData.json';

export default {
    title: "StructuralAdapter/RecursiveStructure",
    component: RecursiveStructure,
}

export const Default = {
    args: {node: providedNodeData, children: <Node/>}
}

export const WithDirectoryInfo = {
    args: {node: providedDirectoryData, children: <DirectoryInfo/>}
}

export const MissingData = {
    args: {children: <DirectoryInfo/>}
}

export const MissingChild = {
    args: {node: providedNodeData}
}
EOF
```

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
git clone --single-branch --branch 5-Brown https://github.com/miwashi-edu/edu-components-grading.git components-grading
cd components-grading
rm -rf .git # Remove history
git init
git add .
git commit -m "Initial Commit"
npm install
```

