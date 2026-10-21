let hour = document.getElementById("hour");
    let minutes = document.getElementById("minute");
    let seconds = document.getElementById("second");
    let startBtn = document.getElementById("startBtn");
    let stopBtn = document.getElementById("stopBtn");
    let resetBtn = document.getElementById("resetBtn");
    let presentHour = 0;
    let presentMinute = 0;
    let presentSecond = 0;
    let startTimer;
    let click = 0;
    function start() {
       click++;
       if(click !== 1){
        return;
       }else{
         startTimer = setInterval(() => {
            if (presentSecond === 59 && presentMinute === 59) {
                presentHour++;
                hour.innerHTML = String(presentHour).padStart(2, "0");
            }
            if (presentSecond === 59) {
                if(presentMinute === 59){
                 presentMinute = 0;
                minutes.innerHTML = String(presentMinute).padStart(2, "0");
                }else{
                presentMinute++;
                minutes.innerHTML = String(presentMinute).padStart(2, "0");
                }
            }
            if (presentSecond === 59) {
                presentSecond = 0;;
                seconds.innerHTML = String(presentSecond).padStart(2, "0");
            } else {
                presentSecond++;
                seconds.innerHTML = String(presentSecond).padStart(2, "0");
            }
        }, 1000)
       }
    }
    startBtn.addEventListener('click', start);


    function stop() {
        click = 0;
        clearInterval(startTimer);
    }
    stopBtn.addEventListener('click', stop)

    function reset() {
        stop();
        clearInterval(startTimer)
        click = 0;
        presentHour = 0;
        presentMinute = 0;
        presentSecond = 0;
        minutes.innerHTML = "00";
        hour.innerHTML = "00";
        seconds.innerHTML = "00";
    }

    resetBtn.addEventListener('click', reset);