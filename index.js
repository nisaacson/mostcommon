module.exports = function getMostCommonElement(inputs, text) {
  var set = {};
  var maxMatches = 0;
  var maxInput = null;
  for (var i in inputs) {
    var input = inputs[i];
    var pattern = new RegExp(input, "i");
    var matches = text.match(pattern);
    var numMatches = 0;
    if (matches) {
      numMatches = matches.length
    }
    if (numMatches > maxMatches) {
      maxMatches = numMatches;
      maxInput = input;
    }
  }
  return maxInput;
}
