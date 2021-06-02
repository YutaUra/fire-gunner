module.exports = [
  {
    message: 'input generator name',
    name: 'name',
    type: 'input',
    validate: (answer) => {
      if (answer !== '') {
        return true
      }
    },
  },
]
