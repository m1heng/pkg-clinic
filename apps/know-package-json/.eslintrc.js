module.exports = {
  root: true,
  extends: ['next/core-web-vitals', '@pkgc/eslint-config/profiles/base'],
  settings: {
    next: {
      rootDir: __dirname,
    },
  },
};
