//Immediately Invoked Function Expressions

(function chai(){
    // named IIFE
console.log(`Database is connected.`);
})(); // use semicolon in case of two IIFE's

// chai()

( (name) => {

    // unndamed IIFE
    console.log(`DB is connected too, ${name}.`);

}  )('sushant') //Parameter pass