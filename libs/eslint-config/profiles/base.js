require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: [
    "prettier"
  ],
  plugins: ["prettier"],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
      },
      {
        usePrettierrc: false,
      },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  },
};