module.exports = {
  env: {
    browser: true,
    es2020: true,
    mocha: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ["**/node_modules/*", "**/dist/*", "**/out/*"],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-use-before-define": "off",
    "prefer-const": "off",
    radix: "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  },
};
