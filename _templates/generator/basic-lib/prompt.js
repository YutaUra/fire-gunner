module.exports = [
  {
    message: 'input library name',
    name: 'name',
    type: 'input',
    validate: (answer) => {
      if (answer !== '' || answer[0] != '@') {
        return true
      }
    },
  },
]
