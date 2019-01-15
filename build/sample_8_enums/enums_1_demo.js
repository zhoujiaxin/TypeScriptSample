"use strict";
// 枚举
var EnResponse;
(function (EnResponse) {
    EnResponse[EnResponse["No"] = 0] = "No";
    EnResponse[EnResponse["Yes"] = 1] = "Yes";
})(EnResponse || (EnResponse = {}));
function enGetResponseData(message, code) {
    // ...
}
enGetResponseData("Print some message!", EnResponse.Yes);
var EnShapeKind;
(function (EnShapeKind) {
    EnShapeKind[EnShapeKind["EnCircle"] = 0] = "EnCircle";
    EnShapeKind[EnShapeKind["EnSquare"] = 1] = "EnSquare";
})(EnShapeKind || (EnShapeKind = {}));
var enC = {
    kind: EnShapeKind.EnCircle,
    radius: 100,
};
