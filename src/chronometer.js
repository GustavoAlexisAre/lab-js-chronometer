class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
    if (printTimeCallback) {
      printTimeCallback()
    }
    this.currentTime++
    }, 1000);
    
  }

 
  getMinutes() {
    if (this.currentTime === 0) return 0;
    return Math.floor(this.currentTime / 60);

  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return("0"+ value).slice(-2)
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let second = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${second}`
  }
}
