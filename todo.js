let form = document.querySelector("#form");
let item = document.querySelector("#item");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");
let ul = document.querySelector("ul");
let body = document.querySelector("body");
const home = document.createElement("p");
home.innerHTML = "<a href='home.html'> You've summoned the Devil</a>";

if (!localStorage.getItem("ul")) {
  console.log("hi");
  localStorage.setItem("ul", 0);
  console.log("hi");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (item.value == "get me out") {
    document.body.innerHTML = home.innerHTML;
    console.log("hey");
  }

  let li = document.createElement("li");
  li.innerHTML = `- ${item.value} ${"<br>"}`;
  li.style.fontSize = "x-large";
  li.style.fontFamily = "Optima";
  ul.appendChild(li);
  li.style.marginTop = "10px";
  li.style.listStyle = "none";
  localStorage.setItem("ul", ul.innerHTML);
  item.value = "";

  li.addEventListener("dblclick", function () {
    li.style.textDecoration = "line-through";
    li.addEventListener("dblclick", function () {
      li.innerHTML = "";
    });
  });
});

reset.addEventListener("click", function () {
  item.value = "";
  ul.innerHTML = "";
});
