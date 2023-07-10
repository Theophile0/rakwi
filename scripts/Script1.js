// JavaScript source code
let namen =[
    {
        naam: "Joachim",
        rood: true
    },
    {
        naam: "Joppe",
        rood: false
    },
    {
        naam: "Marijn",
        rood: true
    }
];

const setup = () => {
let image = document.getElementById("logo");
image.addEventListener("click", overloop);
}
const overloop = () => {
  let div = document.getElementById("divke");

  let input = document.createElement("input");
  let button = document.createElement("button");

  input.setAttribute("type", "text");
  input.setAttribute("name", "Text",);
  input.setAttribute("id", "input");
  input.setAttribute("placeholder", "Vul hier een naam in");
    button.setAttribute("id", "")
  div.appendChild(input);
}

window.addEventListener("load", setup);