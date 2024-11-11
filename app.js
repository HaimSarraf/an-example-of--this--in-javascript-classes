// in this example, we have 3 diffrent METHODs in a class,
// each one try to use "this" as a global variable.
// as you know function's type is OBJECT in js,
// so to cnfig new parameters to a function, we can use "BIND" method.
// open your browser's console to better watch the details

const main = document.getElementById("main");
main.innerHTML = "<h1>....loading...</h1>";

class Member {
  constructor() {
    (this.name = "Vladimir"), (this.age = 10), (this.city = "Moscow");
  }

  info() {
    console.log(
      "Name : " + this.name,
      "\n",
      "Age : " + this.age,
      "\n",
      "City : " + this.city,
      "\n"
    );
    main.innerHTML = `<p>${this.name} is ${this.age} years old</p>`;
  }

  delayMethodWithAnanymusFunctionWithoutBindMethod() {
    setTimeout(function () {
      main.innerHTML = `<p>${this.name} is ${this.age * 2} years old</p>`;
      console.log(this);
      console.log("new Name :" + this.name);
    }, 3000);
  }
  delayMethodWithAnanymusFunctionWithBindMethod() {
    setTimeout(
      function () {
        main.innerHTML = `<p>${this.name} is ${this.age * 3} years old</p>`;
        console.log(this);
        console.log("new Name :" + this.name);
      }.bind(this),
      6000
    );
  }

  delayMethodWithArrowFunction() {
    setTimeout(() => {
      main.innerHTML = `<p>${this.name} is ${this.age * 4} years old</p>`;
      console.log(this);
      console.log("new Name :" + this.name);
    }, 9000);
  }
}

const member = new Member();

member.info();

member.delayMethodWithAnanymusFunctionWithoutBindMethod();
member.delayMethodWithAnanymusFunctionWithBindMethod();
member.delayMethodWithArrowFunction();
