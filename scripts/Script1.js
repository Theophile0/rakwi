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
   let  controleerbtn = document.getElementById("controleer");
    controleerbtn.addEventListener("click", controleer2);
}
// const controleer = () => {
//     let name = document.getElementById("inputText").value;
//     let body = document.getElementsByTagName("body");
//     let superdiv = document.getElementById("superdiv");
//     for (let i = 0; i < namen.length; i++) {
//         if (namen[i].naam === name){
//             if(namen[i].rood === true){
//                 body[0].style.backgroundImage = 'url("/images/rood.png")';
//                 hideInput();
//
//                 //De naam van de persoon in het groot wit centraaal op het scherm plaatsen.
//                 let naam = document.createElement("div");
//
//                 naam.appendChild(document.createTextNode(name));
//                 naam.setAttribute("id", "naam");
//                 let molImg = document.createElement("img");
//                 molImg.setAttribute("src", "../images/rood.png");
//                 superdiv.style.color = "white";
//                 superdiv.style.backgroundRepeat = "no-repeat";
//                 molImg.appendChild(naam);
//                 superdiv.appendChild(molImg);
//
//             }
//             else{
//                 body[0].style.backgroundImage = 'url("/images/groen.jpg")';
//                 hideInput();
//                 let naam = document.createElement("div");
//                 naam.appendChild(document.createTextNode(name));
//                 naam.setAttribute("id", "naam");
//                 body[0].appendChild(naam);
//                 body[0].style.backgroundRepeat = "no-repeat";
//
//             }
//         }
//     }
//
// }
const controleer2 = () => {
    let superdiv = document.getElementById("superdiv");
    let name = document.getElementById("inputText").value;
    for (let i = 0; i < namen.length; i++) {
        if (namen[i].naam === name) {
            hideInput();
            let naam = document.createElement("div");
            naam.appendChild(document.createTextNode(name));
            naam.setAttribute("id", "naam");
            superdiv.appendChild(naam);
            if (namen[i].rood === true) {
                superdiv.style.backgroundImage = 'url("images/rood.png")';
            } else {
                superdiv.style.backgroundImage = 'url("images/groen.jpg")';
            }
            superdiv.className = "gecontroleerd";
        }
    }

}
const hideInput = () => {
    let divke = document.getElementById("divke");
    divke.style.display = "none";
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
}

window.addEventListener("load", setup);