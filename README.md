# edu-components-grading

## set up project

```bash
cd ~
cd ws
mkdir components-grading
cd components-grading
git init
echo '# components-grading' > README.md
curl -o .gitignore https://www.toptal.com/developers/gitignore/api/node
```

## Two ways to set up React with Storybook

### 1 - Storybook

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
git add .
git commit -m "Initial Commit"
```

<hr>
