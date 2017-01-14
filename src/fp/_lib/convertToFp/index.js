function convertToFp (fn, arity) {
  if (arity === 1) {
    return function () {
      return fn()
    }

  } else if (arity === 2) {
    return function (a) {
      return fn(a)
    }

  } else if (arity === 3) {
    return function (b) {
      return function (a) {
        return fn(a, b)
      }
    }

  } else if (arity === 4) {
    return function (c) {
      return function (b) {
        return function (a) {
          return fn(a, b, c)
        }
      }
    }

  } else if (arity === 5) {
    return function (d) {
      return function (c) {
        return function (b) {
          return function (a) {
            return fn(a, b, c, d)
          }
        }
      }
    }
  }
}

module.exports = convertToFp
