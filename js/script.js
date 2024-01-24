const mainContainer = document.querySelector("#timeContainer");
const innerContainer = document.querySelector(".clock");
//const hrs =  innerContainer.createElement("span");
var day_Night = "PM";
//element.classList.add("mystyle");
var c =0;
var s = 0;
var m = 0;

function time(){
let timer = new Date();
//console.log(timer);

// let hr = timer.getHours();
let hr = timer.getHours();
if(hr>=0 && hr<12){
    day_Night = "AM";
}
//let h1 = document.createElement("h1");
let min = timer.getMinutes();
let sec = timer.getSeconds();
let msec = timer.getMilliseconds();
console.log("hr", hr, "min" , min, "sec" , sec );
let timeWtch = hr + ":" + min +":" + sec + day_Night ;
document.querySelector(".clock").innerHTML = `<span>${hr} :</span>
                                              <span>${min} :</span>                        
                                              <span>${sec}</span>
                                              <span id= "dayNight">${day_Night}</span>`;



}

setInterval(time, 1000);

