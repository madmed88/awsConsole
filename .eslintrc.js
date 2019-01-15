module.exports = {
    "plugins": [
        "cypress"
    ],
    "env": {
        "cypress/globals": true,
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    }
};