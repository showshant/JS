const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes  = ["superman", "flash", "batman"]
const names = ["sushant", "sumin", "rakesh"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])

// const myHeroes = marvel_heroes.concat(dc_heroes)
// console.log(myHeroes)

// concat ko alternative

// const allHeroes = [...marvel_heroes, ...dc_heroes, ...names]
// console.log(allHeroes);

//spreading out (flat)
// const another_array = [1, 2, 3, 4, [6, 4, 2, 1,[3,4, 9, 9]]]
// const another_array2 = another_array.flat(Infinity)
// console.log(another_array2);

console.log(Array.isArray("sushant"));
console.log(Array.from("sushant"));
console.log(Array.from({name:"sushant"}));

let score1 = [100, 500]
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score3))