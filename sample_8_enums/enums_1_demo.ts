
// 枚举


enum EnResponse {
    No = 0,
    Yes = 1,
}

function enGetResponseData(message: string, code: EnResponse): void {
    // ...
}

enGetResponseData("Print some message!", EnResponse.Yes);





enum EnShapeKind {
    EnCircle,
    EnSquare,
}

interface EnShCircle {
    kind: EnShapeKind.EnCircle;
    radius: number;
}

interface EnShSquare {
    kind: EnShapeKind.EnSquare;
    sideLength: number;
}

let enC: EnShCircle = {
    kind: EnShapeKind.EnCircle,
    radius: 100,
}