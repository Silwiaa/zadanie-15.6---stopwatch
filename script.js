// STOPWATCH CLASS
class Stopwatch {
    constructor(display){
        this.running=false;
        this.display= display;
        this.reset();
        this.print(this.times);
    }
    
    //RESET METHOD
    reset(){
        this.times={
            minutes:0,
            seconds:0,
            miliseconds:0,
        };
    }
}

// NEW INSTANCE
const stopwatch = new Stopwatch (document.querySelector('.stopwatch'));

// START BUTTON
let startButton = document.getElementById('start');
startButton.addEventListener('click', ()=>stopwatch.start());

// STOP BUTTON
let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', ()=>stopwatch.stop());