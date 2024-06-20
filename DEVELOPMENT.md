### Getting Started

1. First, you need to have the latest [git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git#setting-up-git), [nodejs 20](https://nodejs.org/) or greater installed. OSX, Windows and Linux should all be supported as build environments. This may differ from FiveM's supported environments.

1. For this repo by using the "Fork" button on the upper-right
2. Check out your fork
```
git clone git@github.com:yournamehere/nativewrappers.git
```
3. Install or Update all dependencies
```
npm i
```
4. Get coding! If you've changed or added new functionality, update any relevant documentation. Ensure your work is committed within a feature branch.
5. Ensure the project has no linting errors and builds
```
npm run lint
npm run build
```

### Relevant Commands
1. `pnpm i` - install and link all packages
2. `pnpm build` - builds using `tsc`
3. `pnpm prettier-fix` - autoformats prettier
