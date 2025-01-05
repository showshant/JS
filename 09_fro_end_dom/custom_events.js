const yourEvent = new Event("sushant");

document.querySelector("button")
.addEventListener("sushant", function(){
    alert("Bye Bye!!")
})

document.querySelector("button").dispatchEvent(yourEvent)


//how??

// make event
// attach event to some dom element
//dispatch that event from that dom element in which you attached the event
