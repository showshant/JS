// Async Wait - using this you can write any async code like a normal synchronous code

async function abcd() {
  let a = await fetch(`https://randomuser.me/api/`);
  a = await a.json();
  console.log(a);
}

abcd();
