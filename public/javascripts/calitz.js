

// Clock constants using DOM querySelector by the ID
const hourHand = document.querySelector('#hour');
const minuteHand = document.querySelector('#minute');
const secondHand = document.querySelector('#second');

function startClock() {
    // Using MomentJs and MomentTimeZone to get the current hour, minute, second in la
    var laHr = moment.tz('America/Los_Angeles').hour();
    var laMin = moment.tz('America/Los_Angeles').minute();
    var laSec = moment.tz('America/Los_Angeles').second();

    // Logging the Current time out
    console.log(laHr+":"+ laMin+":"+ laSec);

  

    // Hand Position Formulas

    // hr = the current hour * degrees in a cirlce/hours on the clock  + currnet minute * degrees in a cirlce/minutes in an hour / 12
    // min = current minute * degrees in a cirlce/ minutes in an hour  + current second * 360 / seconds in a minute / 60
    // sec = current second * degrees in a cirlce/ seconds in a minute

    let hrPosition = laHr * 360 / 12 + ((laMin * 360 / 60) / 12);
    let minPosition = (laMin * 360 / 60) + (laSec * 360 / 60) / 60;
    let secPosition = laSec * 360 / 60;

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
