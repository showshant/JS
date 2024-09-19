// const name = "Sushant"
// const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`Hello My name is ${name} and my repo count is ${repoCount}.`)

const gameName = new String("Sushant-ba-com")
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf("b"))

// const newString = gameName.substring(0, 4)
// console.log(newString)

// const anotherString = gameName.slice(-9 ,5)
// console.log(anotherString)

const newStringOne = "      Sushant     "
console.log(newStringOne);
console.log(newStringOne.trim());

const str = "   hello World               "
console.log(str.trimEnd());

const url = "http://sushant.com/sushant%20basnet"
console.log(url.replace('%20', "-"))

console.log(url.includes('suhant'))

console.log(gameName.split(" "))