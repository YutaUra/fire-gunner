---
to: "packages/<%= name %>/package.json"
unless_exists: true
---
{
  "name": "@fire-gunner/<%= name %>",
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
    "@fire-gunner/config": "^0.0.2",
    "@fire-gunner/firestore-document": "^0.0.2",
    "@fire-gunner/firestore-util": "^0.0.2",
    "zod": "^3.1.0"
  },
  "devDependencies": {
    "@google-cloud/firestore": "^4.12.2"
  }
}
