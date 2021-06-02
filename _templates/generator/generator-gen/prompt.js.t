---
to: "_templates/generator/<%= name %>/prompt.js"
unless_exists: true
---
module.exports = [
  {
    message: 'input library name',
    name: 'name',
    type: 'input',
    validate: (answer) => {
      if (answer !== '') {
        return true
      }
    },
  },
]
