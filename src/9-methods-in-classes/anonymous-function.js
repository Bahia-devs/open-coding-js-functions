class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }

  logName = function () {
    console.log(this.heroName);
  }
}

const batman = new Hero('Batman');

setTimeout(batman.logName, 1000);

// setTimeout(batman.logName.bind(batman), 1000);