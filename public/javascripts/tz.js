

// Clock constants using DOM querySelector by the ID
const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');




 function startClock() {
     // Creating Date object and getting the current time
     const date = new Date();
     // if milliadd (defined Later) is true then we set the milliseconds to the result of adding the current milliseconds and the milliseconds calculated later.
     if (window.milliAdd) {
         date.setMilliseconds(date.getMilliseconds() + window.milliAdd);
     }
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
    // Creating a DIV and Paragraph element and saving it to a variable
    const currentD = document.createElement('DIV');
    const currentP = document.createElement('P');
    // Addding classes to the above created elements
    currentD.className = ('currentD')
    currentP.className =('current');
    //Saving the local class element to a variable
    // Creating a text node using string interpolation to show the current time and PM
    const local = document.querySelector('.local');
    const pmText = document.createTextNode(`The current time is ${nHour}:${nMinute} P.M`);

    // Adding the P element into the created Div element
    // Then we are adding the created Div element into the .local element
    // then We ar adding the current time text into the created paragraph element.
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
    // Setting the timezon, if milliadd2 is true (defined later) then add the resulting millizeconds to the timezone and that wil be the resulting hour.
    var m = moment().tz("America/Los_Angeles");
    if (window.milliAdd2) {
        m = moment().add(window.milliAdd2, "ms").tz("America/Los_Angeles");
    }
    var laHr = m.hour();
    var laMin = m.tz("America/Los_Angeles").minute();
    var laSec = m.tz("America/Los_Angeles").second();





    // Hand Position Formulas

    // hr = the current hour * degrees in a cirlce/hours on the clock  + currnet minute * degrees in a cirlce/minutes in an hour / 12
    // min = current minute * degrees in a cirlce/ minutes in an hour  + current second * 360 / seconds in a minute / 60
    // sec = current second * degrees in a cirlce/ seconds in a minute

    let hrPositionC = laHr * 360 / 12 + ((laMin * 360 / 60) / 12);
    let minPositionC = (laMin * 360 / 60) + (laSec * 360 / 60) / 60;
    let secPositionC = laSec * 360 / 60;



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
    var m = moment().tz("Europe/London");
    if (window.milliAdd3) {
        m = moment().add(window.milliAdd3, "ms").tz("Europe/London");
    }
    var loHr = m.hour();
    var loMin = m.tz("Europe/London").minute();
    var loSec = m.tz("Europe/London").second();


    // Hand Position Formulas

    // hr = the current hour * degrees in a cirlce/hours on the clock  + currnet minute * degrees in a cirlce/minutes in an hour / 12
    // min = current minute * degrees in a cirlce/ minutes in an hour  + current second * 360 / seconds in a minute / 60
    // sec = current second * degrees in a cirlce/ seconds in a minute

    let hrPositionL = loHr * 360 / 12 + ((loMin * 360 / 60) / 12);
    let minPositionL = (loMin * 360 / 60) + (loSec * 360 / 60) / 60;
    let secPositionL = loSec * 360 / 60;

   

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




$(document).ready(function () {
    // currentSetInterval is initally set to null
    var currentSetInterval = null;
    // On page load the clock starts to run and render using the current time. It updates every second.
     currentSetInterval = window.setInterval(function () {
        startClock();
        startClockC();
        startClockL();
    }, 1000);

    $('#addTime').on('click', function () {
        // if currentSetInterval is true then it gets clearedout.
        if (currentSetInterval) {
            clearInterval(currentSetInterval);
        } else {
            consol.log("Something went wrong");
        }
        // LOCAL NEW TIME

        // Clock constants using DOM querySelector by the ID
        // Only the variable names have changed
        const hourHandN = document.querySelector('#hour');
        const minuteHandN = document.querySelector('#minute');
        const secondHandN = document.querySelector('#second');
        
        // Saves the value of the input box into a variable
        // Setting the input to the interval variable
        const intervalInput = $('#input').val();
        var interval = intervalInput;


        // Using the Date object to set the hour to the user input time.
        const dateN = new Date();
        window.milliAdd = interval * 60 * 60 * 1000;
        dateN.setMilliseconds(dateN.getMilliseconds() + window.milliAdd);
        const hourN = dateN.getHours();
        const minuteN = dateN.getMinutes();
        const secondN = dateN.getSeconds();

        // Logging the added time to the console for debugging
        console.log(hourN, minuteN, secondN);

        // Hand Position Formulas
        // hr = the current hour * degrees in a cirlce/hours on the clock  + currnet minute * degrees in a cirlce/minutes in an hour / 12
        // min = current minute * degrees in a cirlce/ minutes in an hour  + current second * 360 / seconds in a minute / 60
        // sec = current second * degrees in a cirlce/ seconds in a minute

        //Only the variable names have changed, but not the equation
        var hrPositionN = hourN * 360 / 12 + ((minuteN * 360 / 60) / 12);
        var minPositionN = (minuteN * 360 / 60) + (secondN * 360 / 60) / 60;
        var secPositionN = secondN * 360 / 60;

    

        // Applying the results from the above equation to the clock to show the correct hands position
        // Only the variable names have changed, but not the content.
        hourHandN.style.transform = `rotate(${hrPositionN}deg)`;
        minuteHandN.style.transform = `rotate(${minPositionN}deg)`;
        secondHandN.style.transform = `rotate(${secPositionN}deg)`;



        // CALIFORNIA NEW TIME

        // Clock constants using DOM querySelector by the ID
        // Only the variable names hange changed
        const hourHandCN = document.querySelector('#hourC');
        const minuteHandCN = document.querySelector('#minuteC');
        const secondHandCN = document.querySelector('#secondC');

        // Using MomentJs and MomentTimeZone to get the current hour, minute, second in la
        // Adding the number that the user has input to the currtime time in LA using the momenjs library
        window.milliAdd2 = interval * 60 * 60 * 1000;

        var m = moment().tz("America/Los_Angeles");
        m = moment().add(window.milliAdd2, "ms").tz("America/Los_Angeles");
        var laHrN = m.hour();
        var laMinN = m.tz("America/Los_Angeles").minute();
        var laSecN = m.tz("America/Los_Angeles").second();





        // Hand Position Formulas

        // hr = the current hour * degrees in a cirlce/hours on the clock  + currnet minute * degrees in a cirlce/minutes in an hour / 12
        // min = current minute * degrees in a cirlce/ minutes in an hour  + current second * 360 / seconds in a minute / 60
        // sec = current second * degrees in a cirlce/ seconds in a minute
        // Only the variable names have changed, but the equation is the same.

        let hrPositionCN    = laHrN * 360 / 12 + ((laMinN * 360 / 60) / 12);
        let minPositionCN   = (laMinN * 360 / 60) + (laSecN * 360 / 60) / 60;
        let secPositionCN   = laSecN * 360 / 60;



        // Applying the results from the above equation to the clock to show the correct hands position
        // only the variable names have changed.
        hourHandCN.style.transform = `rotate(${hrPositionCN}deg)`;
        minuteHandCN.style.transform = `rotate(${minPositionCN}deg)`;
        secondHandCN.style.transform = `rotate(${secPositionCN}deg)`;



        // LONDON NEW TIME


        // Clock constants using DOM querySelector by the ID
        // Changing the variable names to render the new hands on the clock.
        const hourHandLN = document.querySelector('#hourL');
        const minuteHandLN = document.querySelector('#minuteL');
        const secondHandLN = document.querySelector('#secondL');
        
        // Using MomentJs and MomentTimeZone to get the current hour, minute, second in London
        // I am adding the number that the user has input into the input box into the momentjs time. The time that was entered will get added to the time shown on the clock.
        
        window.milliAdd3 = interval * 60 * 60 * 1000;
        var m = moment().tz("Europe/London");
        if (window.milliAdd3) {
            m = moment().add(window.milliAdd3, "ms").tz("Europe/London");
        }
        var loHrN = m.hour();
        var loMinN = m.tz("Europe/London").minute();
        var loSecN = m.tz("Europe/London").second();





        // Hand Position Formulas

        // hr = the current hour * degrees in a cirlce/hours on the clock  + currnet minute * degrees in a cirlce/minutes in an hour / 12
        // min = current minute * degrees in a cirlce/ minutes in an hour  + current second * 360 / seconds in a minute / 60
        // sec = current second * degrees in a cirlce/ seconds in a minute
        // This equation has stayed the same through the whole program.

        let hrPositionLN = loHrN * 360 / 12 + ((loMinN * 360 / 60) / 12);
        let minPositionLN = (loMinN * 360 / 60) + (loSecN * 360 / 60) / 60;
        let secPositionLN = loSecN * 360 / 60;



        // Applying the results from the above equation to the clock to show the correct hands position for the new time. Only the variable names have changed
        hourHandLN.style.transform = `rotate(${hrPositionLN}deg)`;
        minuteHandLN.style.transform = `rotate(${minPositionLN}deg)`;
        secondHandLN.style.transform = `rotate(${secPositionLN}deg)`;


        // Applying a value to the currentSetInterval to be the intervalInput value and passing that new value into each function. Thew new function only gets called whjen the button is clicked. 
        currentSetInterval = setInterval(function () {
            startClock();
            startClockC();
            startClockL();
        }, 1000);

    })
});
