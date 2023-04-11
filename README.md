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

    We also need to update the `package.json` to have `main`, `types` and `files` fields point yo `dist` folder
    ```json
    {   
        //...
        "main": "dist/index.js",
        "types": "dist/index.d.ts",
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