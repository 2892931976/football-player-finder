module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "rules": {
    "no-confusing-arrow": ["error", {"allowParens": true}]
  }
};