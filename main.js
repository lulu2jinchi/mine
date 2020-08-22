const button = document.querySelectorAll(".btn");
const simple = document.querySelector(".simple");
const middle = document.querySelector(".middle");
const hard = document.querySelector(".hard");
const gameName = document.querySelector("#gameName");
const mainDiv = document.querySelector("#mainDiv");
const oneUp = document.querySelector("#oneUp");
const twoUp = document.querySelector("#twoUp");
const threeUp = document.querySelector("#threeUp");
const page = document.querySelectorAll(".page");
const oneNum2 = document.querySelector(".oneNum2");
const twoNum2 = document.querySelector(".twoNum2");
const threeNum2 = document.querySelector(".threeNum2");
let gezi; 

oneUp.hidden = true;
twoUp.hidden = true;
threeUp.hidden = true;
page.hidden = true;

// document.addEventListener("click", CreateTable);
simple.addEventListener('click', simpleGame);
middle.addEventListener('click', middleGame);
hard.addEventListener('click', hardGame);
page[0].addEventListener('click', backFirstPage);
page[1].addEventListener('click', backFirstPage);
page[2].addEventListener('click', backFirstPage);



function backFirstPage() {
    location.reload();
}

// setInterval(
//     function () {
//         let num = 0;
//         oneNum2.innerHTML = num++;
//         console.log(oneNum2.innerHTML);
//     }, 1000);

function simpleGame(event) {
    simple.hidden = true;
    middle.hidden = true;
    hard.hidden = true;
    gameName.hidden = true;
    oneUp.hidden = false;
    page.hidden = false;
    let num1 = 1;
    setInterval(
        function () {
            oneNum2.innerHTML = num1++;
        }, 1000);

    let table = "<table id=\'small\'>";
    for (let i = 0; i < 9; i++) {
        table += "<tr>";
        for (let j = 0; j < 9; j++) {
            table += "<td><div id=\"" + i.toString() + "," + j.toString() + "\" class=\"gezi\" οnclick=\"SaoLei(this.name)\"></div></td>";
        }
        table += "</tr>";
    }

    table += "</table>";
    mainDiv.innerHTML = table;

    gezi = document.querySelectorAll(".gezi");
    for (let i = 0; i < 81; i++) {
        gezi[i].addEventListener('contextmenu', createflag);
    }
}

function createflag(event) {
    event.preventDefault();
    this.innerHTML = 10;
}

function middleGame(event) {
    simple.hidden = true;
    middle.hidden = true;
    hard.hidden = true;
    gameName.hidden = true;
    twoUp.hidden = false;
    page.hidden = false;
    let num2 = 1;
    setInterval(
        function () {
            twoNum2.innerHTML = num2++;
        }, 1000);


    let table = "<table id=\'small\'>";
    for (let i = 0; i < 16; i++) {
        table += "<tr>";
        for (let j = 0; j < 16; j++) {
            table += "<td><div id=\"" + i.toString() + "," + j.toString() + "\" class=\"gezi\"><button name=\"" + i.toString() + "," + j.toString() + "\" class=\"gezi\" οnclick=\"SaoLei(this.name)\"></button></div></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    mainDiv.innerHTML = table;
}

function hardGame(event) {
    simple.hidden = true;
    middle.hidden = true;
    hard.hidden = true;
    gameName.hidden = true;
    threeUp.hidden = false;
    page.hidden = false;
    let num3 = 1;
    setInterval(
        function () {
            threeNum2.innerHTML = num3++;
        }, 1000);

    let table = "<table id=\'small\'>";
    for (let i = 0; i < 16; i++) {
        table += "<tr>";
        for (let j = 0; j < 30; j++) {
            table += "<td><div id=\"" + i.toString() + "," + j.toString() + "\" class=\"gezi\"><button name=\"" + i.toString() + "," + j.toString() + "\" class=\"gezi\" οnclick=\"SaoLei(this.name)\"></button></div></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    mainDiv.innerHTML = table;
}

function createSimple() {


}