
module.exports = {
  extends: [
    "next/core-web-vitals", "@pkgc/eslint-config/profiles/base"
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  "settings": {
    "next": {
      "rootDir": __dirname
    }
  },
  rules: {
    
  },
  root: true
};