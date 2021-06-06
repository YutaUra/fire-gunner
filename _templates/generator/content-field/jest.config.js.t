---
to: "packages/cms-content-<%= name %>-field/jest.config.js"
unless_exists: true
---
const path = require('path')
const pkg = require('./package')

module.exports = {
  preset: 'ts-jest',
  displayName: pkg.name,
  name: pkg.name,
  transformIgnorePatterns: ['/node_modules/', './dist'],
  rootDir: './',
  globals: {
    'ts-jest': {
      tsconfig: path.join(__dirname, './tsconfig.json'),
    },
  },
}
