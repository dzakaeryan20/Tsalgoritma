"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCompare = exports.OUT_OF_BOUNDS_ERROR = exports.VALUE_DOES_NOT_EXIST_ERROR = exports.defaultEquals = void 0;
/**
 * Default function to test equality.
 * @function
 */
var defaultEquals = function (a, b) {
    return a === b;
};
exports.defaultEquals = defaultEquals;
exports.VALUE_DOES_NOT_EXIST_ERROR = 'Value does not exist.';
exports.OUT_OF_BOUNDS_ERROR = 'Out of bounds.';
/**
 * Default function to compare element order.
 * @function
 */
function defaultCompare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a === b) {
        return 0;
    }
    else {
        return 1;
    }
}
exports.defaultCompare = defaultCompare;
