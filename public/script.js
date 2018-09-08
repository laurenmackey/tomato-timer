// source: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
function loadTimer() {
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var totalSeconds = 0;
    setTime();
    setInterval(setTime, 1000);
    
    function setTime() {
        ++totalSeconds;
        seconds.innerHTML = ": " + pad(totalSeconds % 60);
        minutes.innerHTML = pad(parseInt(totalSeconds / 60));
    }
    
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
}