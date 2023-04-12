# NPM Package Boilerplate
This is a boilerplate that helps you create a npm package project using TypeScript. It includes the following settings:

- TypeScript
- Jest
- Eslint and Prettier
- Husky and Lint-Staged
- npm pre & post scripts

## Gettting Started
To get started, fork this repository and clone your own fork to your computer. From the project's root directory, install the dependencies using:

```
npm install
```

Next, update the `package.json` to use the information of your own project. You will need to update the following fields:
```js
{
    "name": "{NAME_FOR_YOUR_NPM_PACKAGE}",
    "description": "{DESCRIPTION_OF_YOUR_NPM_PACKAGE}",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/{YOUR_GITHUB_USERNAME}/{YOUR_REPOSITORY}.git"
    },
    "author": "{YOUR_NAME}",
    "bugs": {
        "url": "https://github.com/{YOUR_USERNAME}/{YOUR_REPOSITORY}/issues"
    },
    "homepage": "https://github.com/{YOUR_USERNAME}/{YOUR_REPOSITORY}#readme",
}
```

## Add Your Code
Now you can start working on your project by adding code to the `./src` folder. 

You can run `npm run test` to run unit tests that you create using Jest.

## Commands and Script
Here is a brief explanation of each of the commands/scripts defined in the The `scripts` field in the `package.json`:

- `test`: Runs Jest test runner with the configuration defined in `jest.config.js` file.
- `clean`: Deletes the `dist` directory using the `rimraf` command.
- `build`: Runs `npm run clean` to delete the `dist` directory and then transpiles the TypeScript code using `tsc`.
- `lint`: Runs ESLint on all `.tsx` and `.ts` files inside the `src` directory, using the `--cache` flag to speed up the linting process, and the `--fix` flag to automatically fix any linting errors it can.
- `prepare`: Installs Husky git hooks and runs `npm run build` before the package is packed and published.
- `prepublishOnly`: Runs `npm run test` and `npm run lint` before publishing to the registry. This is to ensure that the code is tested and conforms to the linting rules before it is published.
- `version`: Runs `npm run lint` and adds all changes in the `src` directory to the git staging area. This is done before versioning, to ensure that only correctly formatted code is committed.
- `postversion`: Pushes the changes to the remote repository and adds tags to the commit. This is done after the version has been bumped to ensure that the latest version of the code is pushed to the repository.

To run any of these scripts, simply run `npm run <script name>` in the terminal. For example, to run the test script, you would run `npm run test`.

## Test Your NPM Package
To test your npm package locally, you can follow these steps:

1. Run `npm pack` command in your terminal, which will create a compressed tarball of your package in the root directory of this project (e.g. `package.tgz`).
2. Next, navigate to the directory where you want to test your package.
3. Run `npm install /path/to/your/package.tgz` command in your terminal to install the package from the tarball.
4. Once the package is installed, you can use it in your code and test it as needed.

## Publish Your NPM Package
Once your codes are done and tested, you can publish your package to the NPM registry. First, run `npm login` to login to your NPM account.

Before publishing your package, there is no need to manually run the `npm run build` command as it will be executed automatically by the `prepare` script. This script is triggered when you run the `npm publish` command, and it ensures that your code is compiled and ready for distribution.

### Making Your First Release:

To make the first release of your package, use the following command:
```shell
npm publish
```

If your package is a scoped package (e.g. `@your-username/package-name`), add the `-access` flag after `npm publish`:
```shell
npm publish --access public
```

### Making Patch/Minor/Major Releases:

To bump up a new version of the package, use the following commands:
```shell
# Patch release: Backward compatible bug fixes
npm version patch

# Minor release: Backward compatible new features
npm version minor

# Major release: Changes that break backward compatibility
npm version major
```

After bumping up the version, publish again using:
```shell
npm publish
```

## Contribute
Please feel free to open an issue or a pull request to suggest changes, improvements or fixes.

## License
[MIT](./LICENSE)