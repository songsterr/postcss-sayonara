let postcss = require('postcss')

module.exports = postcss.plugin('postcss-sayonara', (opts = { }) => {
  // eslint-disable-next-line prefer-let/prefer-let
  const {
    allowedPropNames = []
  } = opts

  // eslint-disable-next-line no-unused-vars
  return (root, result) => {
    root.walkRules(rule => {
      rule.walkDecls(decl => {
        if (!allowedPropNames.includes(decl.prop)) {
          decl.remove()
        }
      })
    })
  }
})
