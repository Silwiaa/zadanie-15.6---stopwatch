// STOPWATCH CLASS
class Stopwatch {
    constructor(display){
        this.running=false;
        this.display= display;
        this.reset();
        this.print(this.times);
    }
}