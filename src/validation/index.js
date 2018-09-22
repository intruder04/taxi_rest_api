// @flow

exports.checkIfExists = function checkIfExists(input: string): boolean {
  if (!input) return false;
  return true;
};

exports.checkNumberSize = function checkNumberSize(input: string): boolean {
  const inputFl = parseFloat(input);
  if (inputFl > Number.MAX_SAFE_INTEGER || inputFl < Number.MIN_SAFE_INTEGER) return false;
  return true;
};

exports.checkIfStringContainsNumber = function checkIfStringContainsNumber(input: string): boolean {
  const nonNumRegExp = /^[0-9.-]+$/;
  if ((nonNumRegExp.test(input) === false)) {
    return false;
  }
  return true;
};

exports.checkSymbolRepeats = function checkSymbolRepeats(input: string): boolean {
  const repeatingSymbol = /([,.-]).*?\1/;
  if (repeatingSymbol.test(input) === true) {
    return false;
  }
  return true;
};

exports.checkIfZero = function checkIfZero(input: string): boolean {
  if (input == '0') {
    return false;
  }
  return true;
};
