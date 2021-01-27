// For using other clocks try using getTimezoneoffset()

// Clock constants using DOM querySelector by the ID
const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

function startClock() {
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

    let hrPosition = loHr * 360 / 12 + ((loMin * 360 / 60) / 12);
    let minPosition = (loMin * 360 / 60) + (loSec * 360 / 60) / 60;
    let secPosition = loSec * 360 / 60;

    // Logging the result of the hand positions
    console.log(hrPosition, minPosition, secPosition);

    // Applying the results from the above equation to the clock to show the correct hands position
    hourHand.style.transform = `rotate(${hrPosition}deg)`;
    minuteHand.style.transform = "rotate(" + minPosition + "deg)"
    secondHand.style.transform = "rotate(" + secPosition + "deg)"

}

// When the page loads run the startClock() function every second
window.onload = function () {
    setInterval(function () {
        startClock();
    }, 1000);
};
console.log('The current time is', hour, minute, second);
