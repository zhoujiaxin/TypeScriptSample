"use strict";
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var npStrs = ["Hello", "98052", "101"];
// Validators to use
var npValidators = {};
npValidators["ZIP code"] = new Validation.ZipCodeValidator();
npValidators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, npStrs_1 = npStrs; _i < npStrs_1.length; _i++) {
    var s = npStrs_1[_i];
    for (var name_1 in npValidators) {
        console.log("\"" + s + "\" - " + (npValidators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
