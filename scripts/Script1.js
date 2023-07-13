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
    controleerbtn.addEventListener("click", controleer);
}
const controleer = () => {
    let name = document.getElementById("inputText").value;
    let body = document.getElementsByTagName("body");
    for (let i = 0; i < namen.length; i++) {
        if (namen[i].naam === name){
            if(namen[i].rood === true){
                body[0].style.backgroundImage = "url(\"../images/rood.png\")";
                hideInput();
                let naam = document.createElement("div");
                naam.appendChild(document.createTextNode(name));
                naam.setAttribute("id", "naam");
                body[0].appendChild(naam);
            }
            else{
                body[0].style.backgroundImage = "url(\"../images/groen.jpg\")";
                hideInput();
                let naam = document.createElement("div");
                naam.appendChild(document.createTextNode(name));
                naam.setAttribute("id", "naam");
                body[0].appendChild(naam);
            }
        }
    }

}
const hideInput = () => {
    let input = document.getElementById("inputText");
    let button = document.getElementById("controleer");
    input.style.display = "none";
    button.style.display = "none";
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