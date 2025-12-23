//Type Array
// let films = ["The Godfather", "Pulp Fiction", "Inception"];
let films: string[] = ["The Godfather", "Pulp Fiction", "Inception"];
let number: number[] = [1, 2, 3, 4, 5];

let filmsGeneric: Array<string> = ["The Godfather", "Pulp Fiction", "Inception"];
let numberGeneric: Array<number> = [1, 2, 3, 4, 5];


export function ToUpperCase(films: string[]){
    return films.map(value => value.toUpperCase())
}
console.log(ToUpperCase(films));