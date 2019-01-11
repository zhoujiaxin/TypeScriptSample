function printLabel1(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj1 = { size: 10, label: "Size 10 Object" };
printLabel1(myObj1);