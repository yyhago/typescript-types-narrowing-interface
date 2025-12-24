// Readonly with Arrays and Tuples
// let numbers: readonly number[] = [1, 2, 3, 4, 5];
let numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers[0] = 10; 

const numbersCopy = numbers.map(item => item * 2);
console.log(numbersCopy); // [2, 4, 6, 8, 10]