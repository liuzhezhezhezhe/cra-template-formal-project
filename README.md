[![node version](https://img.shields.io/badge/node-18.12.1-brightgreen.svg?style=plastic)](https://www.npmjs.com/package/cra-template-formal-project)
[![node version](https://img.shields.io/badge/npm-8.19.2-brightgreen.svg?style=plastic)](https://www.npmjs.com/package/cra-template-formal-project)

# Formal typescript project Create React App template

[Create React App](https://github.com/facebook/create-react-app) (CRA) template to build and publish formal project with **typescript**, **eslint**, **mobx**, **craco** and **docker** configurations.There is also a Standard Structure Folder for developer.

## Usage

```shell script
npx create-react-app %PROJECT_NAME% --template formal-project
``` 
Or
```shell script
yarn create react-app %PROJECT_NAME% --template formal-project
```

Then

```shell script
cd %PROJECT_NAME%
docker-compose -f docker-compose-dev.yaml up
```

## Features

- Standard Folder Structure
- [Docker](https://www.docker.com/) for unified development environment.
- [Craco](https://craco.js.org/) for customizing most things when using [Create React App](https://create-react-app.dev/).
- [Mobx](https://mobx.js.org/README.html) for state management.
- [Eslint](https://eslint.org/) and [Typescript](https://www.typescriptlang.org/) for standardizing code.
