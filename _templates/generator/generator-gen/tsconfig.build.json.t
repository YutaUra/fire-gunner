---
to: "_templates/generator/<%= name %>/tsconfig.build.json.t"
unless_exists: true
---
---
to: "packages/<%%= name %>/tsconfig.build.json"
unless_exists: true
---
{
  "extends": "../../tsconfig.build.json",
  "compilerOptions": {
    "rootDir": "src",
    "declarationDir": "dist/types"
  },
  "include": ["src"]
}
