# edu-components-grading

## set up project

```bash
cd ~
cd ws
mkdir components-grading
cd components-grading
git init
echo '# components-grading' > README.md
curl -o .gitignore https://raw.githubusercontent.com/toptal/gitignore/master/templates/Node.gitignore
git add .
git commit -m "Initial Commit"
```

## set up node package and react

> Create an empty npm package

```bash
npm init -y
mkdir src
touch ./src/index.js
npm pkg set main='./src/index.js' 
mkdir ./src/components
```

## Set up storybook

> This will end in: `Couldn't find any stories in your Storybook.` as we have an empty storybook.
> Next trail will add our first story.

```bash
npx storybook init --builder webpack5 --type react --skip-install # or --builder vite 
rm -rf ./src/stories
npm install
npm run storybook
```

## För Lisette

```bash
npm create vite@latest
npx storybook init
```
