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
    controleerbtn = document.getElementById("controleer");

}
const controleer = () => {
    let naam = document.getElementById("inputText");
    for (let i = 0; i < namen.length; i++) {
        if (namen[i].naam === naam){
            if(namen[i].rood === true){

            }
        }
    }

}
const terugOrigineel = () => {
    let div = document.getElementById("divke");

    let input = document.createElement("input");
    let button = document.createElement("button");

    input.setAttribute("type", "text");
    input.setAttribute("name", "Text",);
    input.setAttribute("id", "input");
    input.setAttribute("placeholder", "Vul hier een naam in");
    button.setAttribute("id", "controleer");
    button.setAttribute("placeholder", "Controleer")
    div.appendChild(input);
    div.appendChild(button);
}

window.addEventListener("load", setup);