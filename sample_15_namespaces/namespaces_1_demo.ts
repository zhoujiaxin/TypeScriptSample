
// 命名空间，别名

namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Square {}
    }
}

import polygons = Shapes.Polygons;
let triangle = new polygons.Triangle();

