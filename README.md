# edu-components-grading

## Structural Adapter

> A structural adapter use external json to form itself. This json is provided from a restful backend webservice.
> A structural adapter can be configured trough html to use different components in its structure.


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
