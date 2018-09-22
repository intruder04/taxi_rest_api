exports.checkIfExists = function checkIfExists(input) {
  if (!input) return false;
  return true;
};

exports.checkNumberSize = function checkNumberSize(input) {
  const inputFl = parseFloat(input);
  if (inputFl > Number.MAX_SAFE_INTEGER || inputFl < Number.MIN_SAFE_INTEGER) return false;
  return true;
};

exports.checkSdNumber = function checkSdNumber(input) {
  const sdRegExp = /^SD\d+$/;
  if ((sdRegExp.test(input) === true)) {
    return true;
  }
  return false;
};

exports.checkIfStringContainsNumber = function checkIfStringContainsNumber(input) {
  const nonNumRegExp = /^[0-9.-]+$/;
  if ((nonNumRegExp.test(input) === false)) {
    return false;
  }
  return true;
};

exports.checkSymbolRepeats = function checkSymbolRepeats(input) {
  const repeatingSymbol = /([,.-]).*?\1/;
  if (repeatingSymbol.test(input) === true) {
    return false;
  }
  return true;
};

exports.checkIfZero = function checkIfZero(input) {
  if (input == '0') {
    return false;
  }
  return true;
};
