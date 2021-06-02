---
to: "_templates/generator/<%= name %>/package.json.t"
unless_exists: true
---
---
to: "packages/<%%= name %>/package.json"
unless_exists: true
---
{
  "name": "@fire-gunner/<%%= name %>",
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
    "build:types": "tsc -p tsconfig.build.json"
  },
  "dependencies": {}
}
