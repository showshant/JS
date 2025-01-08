//call backs

// function abcd(a, b) {
//   b();
// }

// abcd(12, function () {
//   console.log("callback chalyo");
// });

// how to use?

// function doSomeAsyncTask(url, callback){
//     fetch(url)
//     .then(raw=>raw.json())
//     .then(result=>{
//         callback()
//     })

// }

// doSomeAsyncTask('some url', function(){

// })

function getData(url, callback){
    fetch(url)
    .then(raw=>raw.json())
    .then(result=>{
        callback(result)
    })
}

getData("https://randomuser.me/api/", function(result){
    console.log(result.results[0].name.first, result.results[0].gender, result.results[0].email);
    
})
