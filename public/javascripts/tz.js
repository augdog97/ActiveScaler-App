

// Clock constants using DOM querySelector by the ID
const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');




 function startClock() {
     // Creating Date object and getting the current time
     const date = new Date();
     const hour = date.getHours();
     const minute = date.getMinutes();
     const second = date.getSeconds();

     // Hand Position Formulas
     // hr = the current hour * degrees in a cirlce/hours on the clock  + currnet minute * degrees in a cirlce/minutes in an hour / 12
     // min = current minute * degrees in a cirlce/ minutes in an hour  + current second * 360 / seconds in a minute / 60
     // sec = current second * degrees in a cirlce/ seconds in a minute
     var hrPosition = hour * 360 / 12 + ((minute * 360 / 60) / 12);
     var minPosition = (minute * 360 / 60) + (second * 360 / 60) / 60;
     var secPosition = second * 360 / 60;

     // Logging the result of the hand positions
     console.log(hrPosition, minPosition, secPosition);

     // Applying the results from the above equation to the clock to show the correct hands position
     hourHand.style.transform = `rotate(${hrPosition}deg)`;
     minuteHand.style.transform = `rotate(${minPosition}deg)`;
     secondHand.style.transform = `rotate(${secPosition}deg)`;


}




// Variables for am and pm
const nDate = new Date();
const nHour = nDate.getHours();
const nMinute = nDate.getMinutes();
const nSecond = nDate.getSeconds();

// Creating a AM and PM conditional 
// The conditional checks to see if the time is greater than or equal to 12 and if it is create a p element with a class of current and add current to the bottom of the local div and add the pm text to the bottom of the current p tag.
// The text shows the current time with including the minutes and am or pm.
if (nHour >= 12) {
    const currentD = document.createElement('DIV');
    const currentP = document.createElement('P');
    currentD.className = ('currentD')
    currentP.className =('current');

    const local = document.querySelector('.local');
    const pmText = document.createTextNode(`The current time is ${nHour}:${nMinute} P.M`);

    currentD.appendChild(currentP);
    local.appendChild(currentD);
    currentP.appendChild(pmText);
} else if (nHour < 12){
  
    const currentD = document.createElement('DIV');
    const currentP = document.createElement('P');
    currentD.className = ('currentD')
    currentP.className = ('current');

    const local = document.querySelector('.local');
    const amText = document.createTextNode(`The current time is ${nHour}:${nMinute} A.M`);
    
    currentD.appendChild(currentP);
    local.appendChild(currentD);
    currentP.appendChild(amText);
} else {
    console.log("This is not a valid date");
}


// California Time //  ****************************


// Clock constants using DOM querySelector by the ID
const hourHandC = document.querySelector('#hourC');
const minuteHandC = document.querySelector('#minuteC');
const secondHandC = document.querySelector('#secondC');

function startClockC() {
    // Using MomentJs and MomentTimeZone to get the current hour, minute, second in la
    var laHr = moment.tz('America/Los_Angeles').hour();
    var laMin = moment.tz('America/Los_Angeles').minute();
    var laSec = moment.tz('America/Los_Angeles').second();

    // Logging the Current time out
    console.log(laHr + ":" + laMin + ":" + laSec);



    // Hand Position Formulas

    // hr = the current hour * degrees in a cirlce/hours on the clock  + currnet minute * degrees in a cirlce/minutes in an hour / 12
    // min = current minute * degrees in a cirlce/ minutes in an hour  + current second * 360 / seconds in a minute / 60
    // sec = current second * degrees in a cirlce/ seconds in a minute

    let hrPositionC = laHr * 360 / 12 + ((laMin * 360 / 60) / 12);
    let minPositionC = (laMin * 360 / 60) + (laSec * 360 / 60) / 60;
    let secPositionC = laSec * 360 / 60;

    // Logging the result of the hand positions
    console.log(hrPositionC, minPositionC, secPositionC);

    // Applying the results from the above equation to the clock to show the correct hands position
    hourHandC.style.transform = `rotate(${hrPositionC}deg)`;
    minuteHandC.style.transform = `rotate(${minPositionC}deg)`;
    secondHandC.style.transform = `rotate(${secPositionC}deg)`;

}



// Variables for am and pm
var nHr = moment.tz('America/Los_Angeles').hour();
var nMin = moment.tz('America/Los_Angeles').minute();
var nSec = moment.tz('America/Los_Angeles').second();

// Creating a AM and PM conditional 
// The conditional checks to see if the time is greater than or equal to 12 and if it is create a p element with a class of current and add current to the bottom of the local div and add the pm text to the bottom of the current p tag.
// The text shows the current time with including the minutes and am or pm.
if (nHr >= 12) {
    // Creating P element
    const currentDI = document.createElement('DIV');
    const currentPA = document.createElement('P');
    currentDI.className = ('currentDI')
    currentPA.className = ('current');
    // Creating text node to show time.
    const localC = document.querySelector('.california');
    const pmText = document.createTextNode(`The current time is ${nHr}:${nMin} P.M`);
    // appending to render time
    currentDI.appendChild(currentPA);
    localC.appendChild(currentDI);
    currentPA.appendChild(pmText);
} else if (nHr < 12) {

    const currentDI = document.createElement('DIV');
    const currentPA = document.createElement('P');
    currentDI.className = ('currentDI')
    currentPA.className = ('currentPA');

    const localC = document.querySelector('.california');
    const amText = document.createTextNode(`The current time is ${nHr}:${nMin} A.M`);


    currentDI.appendChild(currentPA);
    localC.appendChild(currentDI);
    currentPA.appendChild(amText);
} else {
    console.log("This is not a valid date");
}



// London Time // ********************************


// Clock constants using DOM querySelector by the ID
const hourHandL = document.querySelector('#hourL');
const minuteHandL = document.querySelector('#minuteL');
const secondHandL = document.querySelector('#secondL');

function startClockL() {
    // Using MomentJs and MomentTimeZone to get the current hour, minute, second in la
    var loHr = moment.tz('Europe/London').hour();
    var loMin = moment.tz('Europe/London').minute();
    var loSec = moment.tz('Europe/London').second();

    // Logging the Current time out
    console.log(loHr + ":" + loMin + ":" + loSec);



    // Hand Position Formulas

    // hr = the current hour * degrees in a cirlce/hours on the clock  + currnet minute * degrees in a cirlce/minutes in an hour / 12
    // min = current minute * degrees in a cirlce/ minutes in an hour  + current second * 360 / seconds in a minute / 60
    // sec = current second * degrees in a cirlce/ seconds in a minute

    let hrPositionL = loHr * 360 / 12 + ((loMin * 360 / 60) / 12);
    let minPositionL = (loMin * 360 / 60) + (loSec * 360 / 60) / 60;
    let secPositionL = loSec * 360 / 60;

    // Logging the result of the hand positions
    console.log(hrPositionL, minPositionL, secPositionL);

    // Applying the results from the above equation to the clock to show the correct hands position
    hourHandL.style.transform = `rotate(${hrPositionL}deg)`;
    minuteHandL.style.transform = `rotate(${minPositionL}deg)`;
    secondHandL.style.transform = `rotate(${secPositionL}deg)`;

}



// Variables for am and pm
var lHr = moment.tz('Europe/London').hour();
var lMin = moment.tz('Europe/London').minute();
var lSec = moment.tz('Europe/London').second();

// Creating a AM and PM conditional 
// The conditional checks to see if the time is greater than or equal to 12 and if it is create a p element with a class of current and add current to the bottom of the local div and add the pm text to the bottom of the current p tag.
// The text shows the current time with including the minutes and am or pm.
if (lHr >= 12) {
    // Creating P element
    const currentLD = document.createElement('DIV');
    const currentLP = document.createElement('P');
    currentLD.className = ('currentLD')
    currentLP.className = ('currentLP');
    // Creating text node to show time.
    const localLo = document.querySelector('.london');
    const pmText = document.createTextNode(`The current time is ${lHr}:${lMin} P.M`);
    // appending to render time
    currentLD.appendChild(currentLP);
    localLo.appendChild(currentLD);
    currentLP.appendChild(pmText)
} else if (lHr < 12) {

    const currentLD = document.createElement('DIV');
    const currentLP = document.createElement('P');
    currentLD.className = ('currentLD')
    currentLP.className = ('currentLP');

    
    const localLo = document.querySelector('.london');
    const amText = document.createTextNode(`The current time is ${lHr}:${lMin} A.M`);

    currentLD.appendChild(currentLP);
    localLo.appendChild(currentLD);
    currentLP.appendChild(amText);
} else {
    console.log("This is not a valid date");
}

// When the page loads run the startClock() function every second
window.onload = function () {
    setInterval(function () {
        startClock();
        startClockC();
        startClockL();
    }, 1000);
};
console.log('The current time is', hour, minute, second);