---
to: "packages/cms-content-<%= name %>-field/tsconfig.build.json"
unless_exists: true
---
{
  "extends": "../../tsconfig.build.json",
  "compilerOptions": {
    "rootDir": "src",
    "declarationDir": "dist/types",
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
