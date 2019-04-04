module.exports = {
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": false
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "semi": [2, "always"],
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "no-extra-parens": "error",
    "max-len": ["error", { "code": 200 }],
    "no-multi-spaces": "error",
    "no-console": "off",
  },
  "settings": {
    "react": {
      "version": "16.3"
    }
  }
}