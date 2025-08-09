# 💡 edu-components-grading

> This tutorial will set up a **[React](https://react.dev)** project with [Vite](https://vite.dev)
> for component and application developmment.  
> 
> When this tutorial is run you can start component development with `npm run storybook`.
> 
> It prepares the project, it prepares a REDME, and it prepares git for studying.
> The tutorial is locked in at **Vite** with **vanilla javascript**. As vite uses Rollup,
> it is also locked in using **[Rollup](https://rollupjs.org)**.

## 📋 Prepare

1. Understand bash commands like `rm` and `rm -rf` **important**
2. Create a workspace `cd ~ && mkdir ws && cd ws`' (if missing)
2. Register at [npmjs](https://www.npmjs.com/signup)
3. from **npmjs.com** you get a `username`, like @miwashi
4. prepare a name for your library like @wiwashi/components-grading

### 👣 Scaffold Project

#### 📚 Instructions

> ⚠️ **Notice**: the `cd ws` is made complicated for copy/paste protection.
> Simplify it using only `cd ws`.

```bash
cd ~
[ -d ws ] && cd ws || { echo -e '\033[1;31mcreate workspace first!\033[0m'; return 1; }
rm -rf components-grading; mkdir -p components-grading
cd components-grading
curl -o .gitignore https://www.toptal.com/developers/gitignore/api/node
git init
echo '# components-grading' > README.md
git add .
git commit -m "Initial Commit"
```

---

### 👣 Initialize application development

> This will allow you to run `npm run dev` and `npm run build`!

#### 📚 Instructions

##### 🦶 Scaffold project

```bash
cd ~
cd ws
cd components-grading
npm create vite@latest . -- --template react
# Ignore files and continue

echo "# components-grading" > README.md
echo -n > ./src/index.css
rm ./src/App.css
rm -rf ./src/assets
rm ./public/vite.svg
# Replace with favicon of your own choice
curl -L https://raw.githubusercontent.com/miwashi-edu/edu-components-grading/main/resources/favicon.svg -o ./public/favicon.svg
npm install
```

##### 🦶 Create new App.jsx

```bash
cat > ./src/App.jsx << 'EOF'
function App() {
  return (
    <div>edu-storybook</div>
  )
}
export default App
EOF
```

##### 🦶 Create new index.html

```bash
cat > ./index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="icon" href="favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>components-grading</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF
```


#### ▶️ Try it

```
cd ~
cd ws
cd components-grading
npm run dev
# Press o and enter when vite is running.
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

---

### 👣 Initialize component development

#### 📚 Instructions

```bash
cd ~
cd ws
cd components-grading
npx storybook@latest init --builder vite --use-npm --no-telemetry --no-install 
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
git commit -m "Prepared Component development"
```
