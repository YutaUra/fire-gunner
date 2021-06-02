---
to: "_templates/generator/<%= name %>/tsconfig.json.t"
unless_exists: true
---
---
to: "packages/<%%= name %>/tsconfig.json"
unless_exists: true
---
{
  "extends": "../../tsconfig.json"
}
