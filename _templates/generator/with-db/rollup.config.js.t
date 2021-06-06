---
to: "packages/<%= name %>/rollup.config.js"
unless_exists: true
---
import config from '../../rollup.config.base'
import pkg from './package.json'

export default config({
  pkg,
  external: [],
})
