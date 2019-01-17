/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let npStrs = ["Hello", "98052", "101"];

// Validators to use
let npValidators: { [s: string]: Validation.StringValidator; } = {};
npValidators["ZIP code"] = new Validation.ZipCodeValidator();
npValidators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of npStrs) {
    for (let name in npValidators) {
        console.log(`"${s}" - ${npValidators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}