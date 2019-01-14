
// 函数类型

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

// 函数参数名不需要与接口定义的名字相匹配，不再properties check范围
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

// 无需制定类型亦可，TypeScript的类型系统会推断出参数类型
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}