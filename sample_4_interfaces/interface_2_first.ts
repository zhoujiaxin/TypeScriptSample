interface LabelledValue {
    label: string;
}

function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);