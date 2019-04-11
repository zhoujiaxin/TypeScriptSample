import * as Validator from '../sample_14_modules/AllValidators'


declare namespace Validators {
    export type Validator1 = Validator.ZipCodeValidator;
    export type Validator2 = Validator.StringValidator;
    export type Validator3 = Validator.ParseIntBasedZipCodeValidator;
}
