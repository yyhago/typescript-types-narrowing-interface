// Type Object
let programmer: { name: string, age: number } = {
    name: "Yhago",
    age: 23,
};

programmer.name = "Yhago";
programmer.age = 24;

export function getProgrammerInfo(programmer: {name: string, age: number}){
    console.log(`Name: ${programmer.name}, Age: ${programmer.age}`);
}

getProgrammerInfo(programmer);
getProgrammerInfo({name: "Beatriz", age: 30}); 