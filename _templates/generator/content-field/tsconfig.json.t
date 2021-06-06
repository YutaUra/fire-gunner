---
to: "packages/cms-content-<%= name %>-field/tsconfig.json"
unless_exists: true
---
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
