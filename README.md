# 💡 edu-components-grading 白帯

> This tutorial will set up a **[React](https://react.dev)** project with [Vite](https://vite.dev)
> for component and application developmment.  
> 
> When this tutorial is run you can start component development with `npm run storybook`
> or Vite with `npm run dev`.
> 

## 📋 Prepare

```bash
cd ~
mkdir ws # if it doesn't exist
cd ws
mkdir components-grading
cd components-grading
git init
cat "# Components Grading" > README.md
git add .
git commit -m "Initial Commit"
```

## 📚 Instructions

### Install Vite & Storybook

```bash
cd ~
cd ws
cd components-grading
npm create vite@latest . # React, JavaScript, don't install
npx storybook@latest init # Recommended, No Playwrigth  
ctrl-c # Stop Storybook
```

### Clean demo code

```
echo "# components-grading" > README.md
echo "# components-grading" > ./src/info.mdx
echo -n > ./src/index.css
echo -n >  ./src/App.css
rm -rf ./src/assets
rm ./public/*
npm install
```

### 🦶 ./src/App.jsx

```bash
cat > ./src/App.jsx << 'EOF'
function App() {
  return (
    <div><h1>Components Grading</h1></div>
  )
}
export default App
EOF
```

## ▶️ Try it


### App

```
cd ~
cd ws
cd components-grading
npm run dev
# Press o and enter when vite is running.
```

### Storybook

```
cd ~
cd ws
cd components-grading
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
git commit -m "Prepared Application development"
```
