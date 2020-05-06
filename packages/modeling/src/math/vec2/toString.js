/**
 * Convert the given vector to a representative string.
 * @param {vec2} vector - vector of reference
 * @returns (String) string representation
 * @alias module:modeling/math/vec2.toString
 */
const toString = (vec) => {
  return `[${vec[0].toFixed(7)}, ${vec[1].toFixed(7)}]`
}

module.exports = toString
