# edu-components-grading

> This tutorial will set up a **[React](https://react.dev)** project with [Vite](https://vite.dev)
> for component and application developmment.  
> 
> When this tutorial is run you can start component development with `npm run storybook`.
> 
> It prepares the project, it prepares a REDME, and it prepares git for studying.
> The tutorial is locked in at **Vite** with **vanilla javascript**. As vite uses Rollup,
> it is also locked in using **[Rollup](https://rollupjs.org)**.

## Prepare

1. Understand bash commands like `rm` and `rm -rf` **important**
2. Create a workspace `cd ~ && mkdir ws && cd ws`' (if missing)
2. Register at [npmjs](https://www.npmjs.com/signup)
3. from **npmjs.com** you get a `username`, like @miwashi
4. prepare a name for your library like @wiwashi/components-grading

## Instructions

```bash
cd ~
[ -d ws ] && cd ws || { echo "create workspace first!"; exit 1; }
rm -rf components-grading || mkdir components-grading
cd components-grading
curl -o .gitignore https://www.toptal.com/developers/gitignore/api/node
git init
echo '# components-grading' > README.md
```

## Two ways to set up React with Storybook

### 1 - Storybook for components

> This allows you to create a component library, and later add rollup to build it.

#### set up node package and react

> Create an empty npm package

```bash
npm init -y
mkdir src
touch ./src/index.js
npm pkg set main='./src/index.js' 
mkdir ./src/components
```

#### Set up storybook

> This will end in: `Couldn't find any stories in your Storybook.` as we have an empty storybook.
> Next trail will add our first story.

```bash
npx storybook init --builder webpack5 --type react --skip-install # or --builder vite 
rm -rf ./src/stories
git add .
git commit -m "Initial Commit"
npm install
npm run storybook
```

<hr>

### 2 - React with Vite

> This allows you to use Storybook to create an Application.

```bash
npm create vite@latest .
npx storybook init
# Quit Storybook, it has started in onboarding mode
rm -rf ./src/stories
rm -rf ./src/assets
touch ./src/index.js
npm pkg set main='./src/index.js' 
mkdir ./src/components
git add .
git commit -m "Initial Commit"
```

<hr>
