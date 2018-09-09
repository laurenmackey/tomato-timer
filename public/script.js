// source: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
function loadTimer() {
    // store number of user breaks
    var breakCount = 0;

    // set up to display timer
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var totalSeconds = 0;
    setTime();

    // call setTime once every second
    var myTime = setInterval(setTime, 1000);
    
    // increment one second at a time and display minutes and seconds
    function setTime() {
        // stop timer after 25 minutes
        // if (totalSeconds == 20) {
        if (totalSeconds == 1500) {
            stopTimer();
        } else {
            totalSeconds++;
            seconds.innerHTML = ": " + pad(totalSeconds % 60);
            minutes.innerHTML = pad(parseInt(totalSeconds / 60));
        }
    }
    
    // add a zero to display if needed
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    // stop timer when called, increment user breaks
    function stopTimer() {
        clearInterval(myTime);
        totalSeconds = 0;
        breakCount++;
        displayBreak(breakCount);
    }
}

// display to user that it's time for a break
function displayBreak(breakCount) {
    var breakText = document.getElementById("break-text");
    breakText.innerHTML = "It's time for break #" + breakCount + "!";
}