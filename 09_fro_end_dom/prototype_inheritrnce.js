// prototype inheritence

// function makeHuman(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const human1 = new makeHuman("Sushant", 25);

function superman(name, age) {
    this.name = name;
    this.age = age;
  }
  superman.prototype.printMyName = function () {
    console.log(this.name);
  };
  const human1 = new superman("sushant", 21);
  const human2 = new superman("suman", 30);
  