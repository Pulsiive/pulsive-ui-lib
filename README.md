# UI Library 🚀

Next steps:
---
- [x] Initialiser le projet
- [x] Installer Storybook
- [x] Installer Rollup
- [x] Publier la lib (github repo via ssh)
- [x] Automatiser la publication d'une nouvelle release (tag)
- [ ] (MUST HAVE)Lib: Pouvoir importer plus facilement les assets cf. `import { Button } from "@sirdata/ui-lib/components"`

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs the storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.

### `yarn build-storybook`

Storybook will create a static web application capable of being served by any web server.

### `yarn build`

This command will build the library in a `/dist` folder using [Rollup](https://rollupjs.org/guide/en/).

### `yarn build:local`

This command will run `yarn build` and `npm pack` that will pack the project `sirdata-ui-lib-[version].tgz` to the root directory.
You will be able to install the lib in your frontend projects with this following command:
```bash
# with npm
npm i path/to/lib/sirdata-ui-lib-[version].tgz

# with yarn
yarn add path/to/lib/sirdata-ui-lib-[version].tgz
```

## Create a new release

### Requirement
Before create a new release, be sure that your pull request has been approved and merged into `main` branch.

### `yarn release:[type]`
If you want to do a **patch** release you can simply run

```bash
yarn release:patch
```

The existing version will be incremented by 1 in the specified field and automatically: 
- Update the *package.json* version and commit that change
- Create the tag
- Push new commit and tags to the `main` branch

### Available type:
- `prepatch` (v1.0.0 => v1.0.**1-0**)
- `patch` (v1.0.0 => v1.0.**1**)
- `minor` (v1.0.0 => v1.**1**.0)
- `major` (v1.0.0 => v**2**.0.0)

If you want to create a custom release, you can also run that command by specifying a `RELEASE_TYPE` environment variable
```bash
RELEASE_TYPE=[version] npm run release
```

---

This project use:
- [React](https://fr.reactjs.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
