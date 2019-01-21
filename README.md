# Run the application locally

First you need to install all the dependencies, which will also build the application thanks to the postinstall hook:

```sh
npm install
```

And finally you need to run the express server:

```sh
npm run start
```

The app should be available at localhost:1234

# Development mode

To run the app in development mode, you need to install all the dependencies:

```sh
npm install
```

and run the development server

```sh
npm run start:dev
```

# Unit Tests

To run the unit tests

```sh
npm run test
```

# Integration and e2e tests

To run the tests

```sh
npm run cypress:open
```