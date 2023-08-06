const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '8');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const key1 = prompt('Один из последних просмотренных фильмов?', ''),
      sense1 = prompt('Как вы его оцените?', '10'),
      key2 = prompt('Один из последних просмотренных фильмов?', ''),
      sense2 = prompt('Как вы его оцените?', '10');
personalMovieDB.movies[key1] = sense1;
personalMovieDB.movies[key2] = sense2;

console.log(personalMovieDB);

