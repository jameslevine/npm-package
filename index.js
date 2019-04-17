module.exports = function removeSpaces(string) {
  if (typeof string !== "string") throw new TypeError("This function needs a string!");
  return string.replace(/\s/g, "");
};
