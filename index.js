module.exports = (opts = {}) => {
  const {
    allowedPropNames = []
  } = opts
  return {
    postcssPlugin: 'postcss-sayonara',
    Declaration (decl) {
      if (!allowedPropNames.includes(decl.prop)) {
        decl.remove()
      }
    }
  }
}

module.exports.postcss = true
