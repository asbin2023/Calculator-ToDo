let body = document.querySelector("body");
let container = document.querySelector(".container");
let childClasses = document.querySelector(".child");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let add = document.querySelector(".add");
let minus = document.querySelector(".minus");
let zero = document.querySelector(".zero");
let dot = document.querySelector(".dot");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let input = document.querySelector(".input");

function testing(...item) {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
      if (input.innerHTML === "Clear") {
        input.innerHTML = "";
      }
      input.innerHTML += item[i].innerHTML;
      console.log("ok");
    });
  }
}

clear.addEventListener("click", function () {
  input.innerHTML = "";
});

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
  equal
);
