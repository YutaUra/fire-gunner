---
to: "packages/<%= name %>/tsconfig.json"
unless_exists: true
---
{
  "extends": "../../tsconfig.json"
}
