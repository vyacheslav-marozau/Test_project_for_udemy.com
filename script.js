'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '8');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '8');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
/*let w = 1;
while (w <= 2) {
    let key = prompt('Один из последних просмотренных фильмов?', ''),
        sense = prompt('Как вы его оцените?', '10');
    if (key != null && sense != null && key != ' ' && sense != ' ' && key.length < 50 ) {
        personalMovieDB.movies[key] = sense;
        console.log('done');
        console.log(personalMovieDB);
    } else {
        alert ('Вы не ввели название фильма (либо ввели название фильма более 50 символов) и/или его оценку, ведите название фильма и оценку');
        console.log('error');
        w--;
    }
    w++;
}*/   // цикл while
/*let w = 1;
do {
    let key = prompt('Один из последних просмотренных фильмов?', ''),
        sense = prompt('Как вы его оцените?', '10');
    if (key != null && sense != null && key != ' ' && sense != ' ' && key.length < 50 ) {
        personalMovieDB.movies[key] = sense;
        console.log('done');
        console.log(personalMovieDB);
    } else {
        alert ('Вы не ввели название фильма (либо ввели название фильма более 50 символов) и/или его оценку, ведите название фильма и оценку');
        console.log('error');
        w--;
    }
    w++;
} while (w <= 2)*/   // цикл do while

function rememberMyFilms() {
    for (let w = 1; w <= 2; w++) {
        let key = prompt('Один из последних просмотренных фильмов?', ''),
            sense = prompt('Как вы его оцените?', '10');
        if (key != null && sense != null && key != ' ' && sense != ' ' && key.length < 50 ) {
            personalMovieDB.movies[key] = sense;
            console.log('done');
            //console.log(personalMovieDB);
        } else {
            alert ('Вы не ввели название фильма (либо ввели название фильма более 50 символов) и/или его оценку, ведите название фильма и оценку');
            console.log('error');
            w--;
        }
    }   // цикл for
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов!');
    } else if ( 10 <= personalMovieDB.count <= 30 ) {
        alert('Вы классичесский зритель!');
    } else if ( personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else {
        alert('Произошла Ошибка');
    }
}

detectPersonalLevel();

// 2/ Создать функцию showMyDB, которая будет проверять свойство privat.
// Если стоит в позиции false - выводит в консоль главный объект программы

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

// 3/ Создать функцию writeYourGenres в которой пользователь будет 3 раза
// отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}".
// Каждый ответ записывается в массив данных genres

function writeYourGenres() {
    for (let w = 0; w <= 2; w++) {
        personalMovieDB.genres[w] = prompt(`Ваш любимый жанр под номером ${w+1}`)
    }
}
writeYourGenres();
