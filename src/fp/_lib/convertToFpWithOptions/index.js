function convertToFp (fn, arity) {
  if (arity === 1) {
    return function (options) {
      return fn(options)
    }

  } else if (arity === 2) {
    return function (options) {
      return function (a) {
        return fn(a, options)
      }
    }

  } else if (arity === 3) {
    return function (options) {
      return function (b) {
        return function (a) {
          return fn(a, b, options)
        }
      }
    }

  } else if (arity === 4) {
    return function (options) {
      return function (c) {
        return function (b) {
          return function (a) {
            return fn(a, b, c, options)
          }
        }
      }
    }

  } else if (arity === 5) {
    return function (options) {
      return function (d) {
        return function (c) {
          return function (b) {
            return function (a) {
              return fn(a, b, c, d, options)
            }
          }
        }
      }
    }
  }
}

module.exports = convertToFp
