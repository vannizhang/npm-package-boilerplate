# npm-package-boilerplate

## Initial Setp up

1. Initialize a new scoped npm package:
    ```
    npm init --scope=@vannizhang
    ```

    It generates a `package.json` file looks like this:
    ```json
    {
        "name": "@vannizhang/npm-package-boilerplate",
        "version": "1.0.0",
        "description": "A boilerplate to create npm package using TypeScript",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "repository": {
            "type": "git",
            "url": "git+https://github.com/vannizhang/npm-package-boilerplate.git"
        },
        "author": "",
        "license": "MIT",
        "bugs": {
            "url": "https://github.com/vannizhang/npm-package-boilerplate/issues"
        },
        "homepage": "https://github.com/vannizhang/npm-package-boilerplate#readme"
    }
    ```

    We also need to update the `package.json` to have `main`, `types` and `files` fields point yo `dist` folder.
    ```json
    {   
        //...
        "main": "dist/index.js", // The property main is important here since it will tell npm where it can import the modules from.
        "types": "dist/index.d.ts", // The property types will tell Typescript and Code-editors where we can find the type definitions
        "files": [
            "dist/**/*"
        ],
    }
    ```

2. Install TypeScript as a development dependency:
    ```
    npm install typescript --save-dev
    ```

3. Create a `tsconfig.json` file in the root directory to configure TypeScript:
    ```json
    {
        "compilerOptions": {
            "declaration": true,
            "outDir": "dist",
            "module": "commonjs",
            // Modern browsers support all ES6 features, so ES6 is a good choice. 
            "target": "es6",
            "esModuleInterop": true,
            "sourceMap": true
        },
        "include": ["src/**/*"]
    }
    ```

4. Create a `src` directory and write TypeScript code inside this directory. It's recommended to put the source code in `src` directory and the compiled code in `dist` directory.

5. Create an entry file for your package (e.g. `index.ts`) and write the package code inside this file. This file should import and export the necessary functions and classes.

   Here is the `./src/index.ts` file:
    ```js
    import {
        greeting
    } from './greetings'

    export {
        greeting
    }
    ```

    Here is the `./src/greeting/index.ts`:
    ```js
    export const greeting = (name:string):string=>{
        return `hello ${name}`
    }
    ```

6. Add a build script to the `package.json` file to compile the TypeScript code to JavaScript:
    ```json
    {
        "scripts": {
            "build": "tsc"
        }
    }
    ```

7. Create a `.npmignore` file to keep stuff out of your package.
    ```
    src
    tsconfig.json
    ```

8. Setup Jest  
    ```
    npm install jest @types/jest ts-jest -D
    ```

    We need to use `ts-jest`, which is a TypeScript preprocessor with source map support for Jest that lets us use Jest to test projects written in TypeScript. 
    
    In order for Jest to transpile TypeScript with `ts-jest`, we will also need to create a configuration file using this command:

    ```
    npx ts-jest config:init
    ```

    which will generate a `jest.config.js` file at project's root level:
    ```js
    /** @type {import('ts-jest').JestConfigWithTsJest} */
    module.exports = {
        preset: 'ts-jest',
        testEnvironment: 'node',
    };
    ```

9. It is a good practice to clean the `./dist` folder before running `npm run build`. Unfortunately, there is no native way to do this in TypeScript, so we will use `rimraf`

    ```
    npm install rimraf --save-dev
    ```

    Add a script to your `package.json` file that cleans the dist folder:

    ```json
    {
        "scripts": {
            "clean": "rimraf dist",
            "build": "npm run clean && tsc"
        },
    }
    ```
## Set up Eslint and Prettier
Follow this [instruction](https://github.com/vannizhang/resources/issues/21#issuecomment-1225997871) to set up Eslint and Prettier.


## Test npm package locally

To test an npm package locally, you can follow these steps:

1. Open the terminal or command prompt on your computer.
2. Navigate to the directory where your npm package is located.
3. Run `npm pack` command in your terminal, which will create a compressed tarball of your package in the root directory of your package (e.g. `vannizhang-npm-package-boilerplate-1.0.0.tgz`).
4. Next, navigate to the directory where you want to test your package.
5. Run `npm install /path/to/your/package.tgz` command in your terminal to install the package from the tarball.
6. Once the package is installed, you can use it in your code and test it as needed.

Alternatively, you can also use `npm link` to link your package globally, so that you can test it in a separate project without having to install it each time. Here are the steps to use npm link:

1. Open the terminal or command prompt on your computer.
2. Navigate to the directory where your npm package is located.
3. Run `npm link` command in your terminal to create a global symlink of your package.
4. Next, navigate to the directory where you want to test your package.
5. Run `npm link <package-name>` command in your terminal to link your package to the current project.
6. Once the package is linked, you can use it in your code and test it as needed.

Both `npm pack` and `npm link` methods have their own advantages and limitations, and which method is better depends on your specific use case.

`npm pack` method is useful when you want to distribute your package to others or publish it to the npm registry. It creates a compressed tarball of your package that can be easily shared with others. You can also use `npm pack` to test your package locally before publishing it.

On the other hand, `npm link` method is useful when you want to test your package locally in a separate project without having to install it each time. It creates a global symlink of your package, so any changes you make to the package will be reflected immediately in the linked project.

If you're working on a package that you plan to **publish to the npm registry**, it's recommended to use `npm pack` method to test and distribute your package. However, if you're working on a package that you only need to use in a separate project, npm link method might be more convenient and efficient for testing and development purposes.

## Publish npm package

`prepare` will run both BEFORE the package is packed and published, and on local npm install. Perfect for running building the code. Add this script to `package.json`:

```json
{
    "scripts": {
        //...
        "prepare" : "husky install && npm run build"
    },
}
```

`prepublishOnly` will run BEFORE prepare and ONLY on npm publish. Here we will run our test and lint to make sure we don’t publish bad code:

```json
{
    "scripts": {
        //...
        "prepublishOnly" : "npm run test && npm run lint"
    },
}
```

`preversionwill` run before bumping a new package version. To be extra sure that we’re not bumping a version with bad code, why not run lint here as well?

```json
{
    "scripts": {
        //...
        "preversion" : "npm run lint"
    },
}
```

`version` will run after a new version has been bumped. If your package has a git repository, like in this case, a commit and a new version-tag will be made every time you bump a new version. 

This command will run BEFORE the commit is made. One idea is to run the lint here and so no ugly code will pass into the new version:

```json
{
    "scripts": {
        //...
        "version" : "npm run lint && git add -A src"
    },
}
```

`postversion` will run after the commit has been made. A perfect place for pushing the commit as well as the tag.

```json
{
    "scripts": {
        //...
        "postversion" : "git push && git push --tags"
    },
}
```

