---
to: "packages/cms-content-<%= name %>-field/package.json"
unless_exists: true
---
{
  "name": "@fire-gunner/cms-content-<%= name %>-field",
  "version": "0.0.0",
  "description": "> TODO: description",
  "author": "YutaUra <yuuta3594@outlook.jp>",
  "license": "ISC",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "browser": "dist/umd/index.js",
  "types": "dist/types/index.d.ts",
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "build": "run-p build:*",
    "build:code": "rollup -c",
    "build:types": "tsc -p tsconfig.build.json",
    "watch": "run-p watch:*",
    "watch:code": "rollup -cw",
    "watch:types": "tsc -p tsconfig.build.json --watch"
  },
  "dependencies": {
    "@fire-gunner/cms-content-field": "^0.0.0"
  },
  "devDependencies": {
    "@chakra-ui/react": "^1.6.3",
    "@emotion/react": "^11",
    "@emotion/styled": "^11",
    "@types/react": "^17.0.9",
    "@types/react-dom": "^17.0.6",
    "framer-motion": "^4",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "peerDependencies": {
    "@chakra-ui/react": "^1.6.3",
    "@emotion/react": "^11",
    "@emotion/styled": "^11",
    "framer-motion": "^4",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
