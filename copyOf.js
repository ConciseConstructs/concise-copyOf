function copyOf(data) {
  return JSON.parse(JSON.stringify(data))
}
module.exports = copyOf