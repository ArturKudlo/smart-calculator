class SmartCalculator {
  constructor(initialValue) {
    this.result = initialValue; 
  }

  add(number) {
    this.result = this.result + '+' + number
    console.log(this)
      return this;
  }
  
  subtract(number) {
    this.result = this.result + '-' + number
    console.log(this)
      return this;
  }

  multiply(number) {
     this.result = this.result + '*' + number
     console.log(this)
    return this
  }

  devide(number) {
      this.result = this.result + '/' + number
      console.log(this)
      return this;
  }

  pow(number) {
  this.result = this.result + '**' + number
  console.log(this)
    return this;
  }

  valueOf() {
    return eval(this.result)
  }
}

module.exports = SmartCalculator;
