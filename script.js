// STOPWATCH CLASS
class Stopwatch {
    constructor(display){
        this.running=false;
        this.display= display;
        this.reset();
        this.print(this.times);
    }
    
    // RESET METHOD
    reset(){
        this.times={
            minutes:0,
            seconds:0,
            miliseconds:0,
        };
    }
    
    // PRINT METHOD
    print() {
        this.display.innerText=this.format(this.times);
    }
    
    // FORMAT METHOD
    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    
    // FUNCTION WHICH ADDS "0" TO RESULT 
    function pad0(value) {
        let result=value.toString{};
        if (result.length<2) {
            result ='0' + result;
        }
        
        return result;
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