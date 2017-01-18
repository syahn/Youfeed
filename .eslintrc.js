module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1,
        // "indent": [
        //     "error",
        //     "tab",
        //     2
        // ],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        "semi": [
            "error",
            "always"
        ]
    }
};
