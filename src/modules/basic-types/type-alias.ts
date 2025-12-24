//Type Alias
type Salary = number | string;
type Programmer = {
    name: string, 
    age: number, 
    contact: {email: string, phone: string}
    salary?: Salary
}

export function getProgrammerInfo(programmer: Programmer){
    console.log(`Name: ${programmer.name}, Age: ${programmer.age}`);
}

getProgrammerInfo({
    name: "Yhago",
    age: 25,
    contact: {
        email: "yhago@gmail.com",
        phone: "123456789"
    }
}); 