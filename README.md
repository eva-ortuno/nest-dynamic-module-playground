## Description

Dynamic modules with nestJs

What we are trying to achieve here are several things : 
- use a dynamic module that has several services, one using the actual dynamic part of the module
- set the dynamic property via env variable and not hard coded

Current Solution
- AuthService is instantiated into AuthUserService and AuthOtherService
- Each one injects a different configuration into the AuthService instance
- The providers to be injected are created in a dynamic module

## Installation

```bash
$ npm install
```

## Running the app

Rename `.env.sample` to `.env`

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

Rename `.env.sample` to `.env`

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

