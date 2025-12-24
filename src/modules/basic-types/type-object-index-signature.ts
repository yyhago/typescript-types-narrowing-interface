// Type Obejct Index Signature
type Movie = {
    title: string,
    year: number,
    isFavorite: boolean,
    genre: string,
    [key: string | number]: string | number | boolean
}

type MoviesCollection = {
    [key: string]: Movie
}

let movies: MoviesCollection = {
    movie1: {
        title: "Inception",
        year: 2010,
        isFavorite: false,
        genre: "Sci-Fi",
        director: "Christopher Nolan"
    },
    movie2: {
        title: "The Dark Knight",
        year: 2008,
        isFavorite: true,
        genre: "Action",
        runtime: 152
    }
}


export function showMovies(movies: MoviesCollection){
    console.log(movies);
}

showMovies(movies);