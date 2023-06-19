const body = document.querySelector("body");
const childClasses = document.querySelector(".child");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const input = document.querySelector(".input");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const home = document.createElement("p");
home.innerHTML = "<a href='home.html'> You've summoned the Devil</a>";

function testing(...item) {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
      if (input.innerHTML === "Clear") {
        input.innerHTML = "";
      }
      if (input.innerHTML === "---666") {
        input.innerHTML = home.innerHTML;
      }
      input.innerHTML += item[i].innerHTML;
      console.log("ok");
    });
  }
}

testing(
  seven,
  eight,
  nine,
  four,
  five,
  six,
  one,
  two,
  three,
  multiply,
  divide,
  add,
  minus,
  zero,
  dot,
  clear,
  left,
  right
);

equal.addEventListener("click", function () {
  input.innerHTML = eval(input.innerHTML);
});

clear.addEventListener("click", function () {
  input.innerHTML = "";
});
