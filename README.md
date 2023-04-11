# NPM Package Boilerplate
This is a boilerplate to help you create npm package project using TypeScript.

This boilerplate has these settings provided:
- TypeScript
- Jest
- Eslint and Prettier
- Husky and Lint-Staged
- npm pre & post scripts

## Gettting Started
Fork this repository and clone your own fork to your computer.

From the project's root directory, install the dependencies:
```
npm install
```

Update the `package.json` to use the information of your own project, you will only need to update these fields listed below:
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
That's all customizations that you need to make. Now You can start working on your project by adding codes to `./src` folder.

you can run `npm run test` to run unit tests you created using Jest. 

Run `npm run build` to generate the compiled files in the `./dist` folder.

## Test Your NPM Package
To test your npm package locally, you can follow these steps:

1. Open the terminal or command prompt on your computer.
2. Navigate to the directory where your npm package is located.
3. Run `npm pack` command in your terminal, which will create a compressed tarball of your package in the root directory of your package (e.g. `vannizhang-npm-package-boilerplate-1.0.0.tgz`).
4. Next, navigate to the directory where you want to test your package.
5. Run `npm install /path/to/your/package.tgz` command in your terminal to install the package from the tarball.
6. Once the package is installed, you can use it in your code and test it as needed.

## Publish Your NPM Package
Once your codes are done and tested, you can publish your package to NPM register.

Run `npm login` to login to you NPM account.

### Making first release of this package:

```shell
npm publish --access public
```

### Making patch/minor/major releases of this package:
We will need to bump up a new version of the package:
```shell
# Patch release: Backward compatible bug fixes
npm version patch

# Minor release: Backward compatible new features
npm version minor

# Major release: Changes that break backward compatibility
npm version major
```

Then publish again:
```shell
npm publish
```