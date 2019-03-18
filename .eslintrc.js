module.exports = {
    "env": {
        "es6": true,
        "node": false,
        "browser": true
    },
    "extends": [
        "plugin:react/recommended",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "parserOptions": {
            "ecmaVersion": 8
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/prop-types": 0,
        "react/jsx-tag-spacing": [1, {
            "beforeSelfClosing": "always"
        }],
        "no-trailing-spaces": [2],
        "no-unused-vars": [2],
        "comma-dangle": [2, "always-multiline"],
        "eol-last": [2]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}