# NPM Package Boilerplate
This is a boilerplate that helps you create an npm package project using TypeScript. It includes the following settings:

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
    "name": "name-of-your-npm-package",
    "description": "A boilerplate to create npm package using TypeScript",
    "repository": {
        "type": "git",
        "url": "git+https://github.com/{YOUR_GITHUB_USERNAME}/{YOUR_REPOSITORY}.git"
    },
    "author": "",
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/{YOUR_USERNAME}/{YOUR_REPOSITORY}/issues"
    },
    "homepage": "https://github.com/{YOUR_USERNAME}/{YOUR_REPOSITORY}#readme",
}
```

## Add Your Code
Now you can start working on your project by adding code to the `./src` folder. 

You can run `npm run test` to run unit tests that you create using Jest.

To generate the compiled files in the `./dist` folder, run `npm run build`.

## Test Your NPM Package
To test your npm package locally, you can follow these steps:

1. Open the terminal or command prompt on your computer.
2. Navigate to the directory where your npm package is located.
3. Run `npm pack` command in your terminal, which will create a compressed tarball of your package in the root directory of your package (e.g. `package.tgz`).
4. Next, navigate to the directory where you want to test your package.
5. Run `npm install /path/to/your/package.tgz` command in your terminal to install the package from the tarball.
6. Once the package is installed, you can use it in your code and test it as needed.

## Publish Your NPM Package
Once your codes are done and tested, you can publish your package to the NPM registry. First, run npm login to login to your NPM account.

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