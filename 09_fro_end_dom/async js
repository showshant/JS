// ASYNC JS

// 1️⃣settimeout - settimeout ko code kei ber pachi chalcha

// setTimeout(function () {
//   console.log("hey");
// }, 2000);

// console.log("Hey 1");
// console.log("Hey 2");
// console.log("Hey 3");

// setTimeout(() => {
//     console.log("Hey 4");
// }, 2000);
// console.log("Hey 5");
// console.log("Hey 6");

// 2️⃣setinterval - set interval ko code kei ber pachi chalirahancha (baar baar) ek particular interval time ma

// setInterval(() => {
//   console.log("Hey");
// }, 1000);

// var count = 1;

// const a = setInterval(()=>{
// count++;
// console.log(count);
// if(count === 6)
// {
//     clearInterval(a) // to stop set Interval
// }

// }, 1000);

// output 2 3 4 5 6 aaucha

// 3️⃣fetch API - yo kunai arko url (API) ma gayera kunai data liyera or data hamro data url ma liyera janxa

// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(raw => raw.json())
// .then(readable=> console.log(readable))

// 4️⃣Axios - does same as fetch but it is more development friendly

// axios.get(`https://randomuser.me/api/`)
// .then(result=>console.log(result.data.results[0].email));

// .then fetch ma 2 times lekhna parcha but in axios ek choti lekhey pugcha

//5️⃣promise - yesko bhitra j code lekhyo, tyo code aafno kaam garcha ani yo aafai side stack ma janxa tyo code lai liyera ani jaba bhitra bata code resolve hunxa taba yo chalcha

// go and bring the user and if the user is male then  green buton else red button

const parchi = new Promise(function (resolve, reject) {
  fetch(`https://randomuser.me/api/`)
    .then((raw) => raw.json())
    .then((result) => {
      if (result.results[0].gender === "male") resolve();
      else reject();
    });
});

parchi
  .then(function () {
    console.log("green light 123!");
  })
  .catch(function () {
    console.log("red light 123!");
  });


  // yo sabai maathi ko use taba garincha jaba malai kei yesto garnu cha jasma time lagcha
