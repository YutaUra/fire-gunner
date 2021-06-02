module.exports = [
  {
    message: 'input component type(cms-content-<name>-field)',
    name: 'name',
    type: 'input',
    validate: (answer) => {
      if (answer !== '') {
        return true
      }
    },
  },
]
