require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['prettier'],
  plugins: ['prettier', 'simple-import-sort'],
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
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
