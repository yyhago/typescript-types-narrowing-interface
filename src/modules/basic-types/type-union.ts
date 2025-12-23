//Type Union
let shoppingCart: (string | number)[] = ["342", "27", 23, 45, "text not found"];

export function totalize(values: Array<number | string>){
    return values.map(valuesItem => typeof valuesItem === 'number' ? valuesItem : parseFloat(valuesItem))
    .filter(value => !isNaN(value))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(totalize(shoppingCart));