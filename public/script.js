// var maxPomodoroSeconds = 1500,
//     maxShortBreakSeconds = 300, 
//     maxLongBreakSeconds = 1800;

// use these for testing
var maxPomodoroSeconds = 10,
    maxShortBreakSeconds = 5, 
    maxLongBreakSeconds = 30;

// load first pomodoro timer
function loadTimer() {
    var timerCount = 0;
    startPomodoro(timerCount);
}

// source: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
function showTimer(maxSeconds, timerCount) {
    // set up to display timer
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var totalSeconds = 0;
    setTime();

    // call setTime once every second
    var myTime = setInterval(setTime, 1000);
    
    // increment one second at a time and display minutes and seconds
    function setTime() {
        // stop timer after passed-in time interval
        if (totalSeconds == maxSeconds) {
            stopTimer(timerCount, myTime);
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
}

// stop timer when called, set up break if needed
function stopTimer(timerCount, myTime) {
    clearInterval(myTime);

    // this is currently a break if timerCount is even
    var isBreak = timerCount % 2;
    
    // if currently a break, display pomodoro next, otherwise show break
    if (isBreak) {
        timerCount++;
        startPomodoro(timerCount);
    } else {
        timerCount++;
        startBreak(timerCount);
    }
}

// display to user that it's pomodoro time
function startPomodoro(timerCount) {
    var pomodoroText = document.getElementById("break-text");
    pomodoroText.innerHTML = "It's pomodoro time!";
    showTimer(maxPomodoroSeconds, timerCount);
}

// display to user that it's time for a break
function startBreak(timerCount) {
    var breakCount = (Math.floor(timerCount / 2) + 1);
    var breakText = document.getElementById("break-text");
    breakText.innerHTML = "It's time for break #" + breakCount + "!";

    // set to short break if fewer than 4 breaks, otherwise set to long break
    var maxSeconds = (breakCount < 4) ? maxShortBreakSeconds : maxLongBreakSeconds;
    showTimer(maxSeconds, timerCount);
}
