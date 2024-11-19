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

### Scaffold Login component

```bash
cd ~
cd ws
cd components-grading
mkdir ./src/components/StructuralAdapter
cd ./src/components/StructuralAdapter
touch ./src/components/StructuralAdapter/index.js
touch ./src/components/StructuralAdapter/StructuralAdapter.module.css
touch ./src/components/StructuralAdapter/StructuralAdapter.styles.js
touch ./src/components/StructuralAdapter/FlexGridStructure.jsx
touch ./src/components/StructuralAdapter/Card.jsx
touch ./src/components/StructuralAdapter/FlexGridStructure.stories.jsx
touch ./src/components/StructuralAdapter/Card.stories.jsx
```
