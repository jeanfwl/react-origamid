module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["react", "react-hooks"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unsafe-finally": "off",
    "no-unused-vars": "off",
    "react-refresh/only-export-components": "off"
  }
}
