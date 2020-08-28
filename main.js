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
const oneNum = document.querySelector(".oneNum");

const oneNum2 = document.querySelector(".oneNum2");
const twoNum2 = document.querySelector(".twoNum2");
const threeNum2 = document.querySelector(".threeNum2");
let clickNum = 0;

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
            table += "<td><div id=\"g" + i.toString() + "-" + j.toString() + "\" class=\"gezi\" οnclick=\"SaoLei(this.name)\"></div></td>";
        }
        table += "</tr>";
    }

    table += "</table>";
    mainDiv.innerHTML = table;

    gezi = document.querySelectorAll(".gezi");
    for (let i = 0; i < 81; i++) {
        gezi[i].addEventListener('contextmenu', createflag);
        gezi[i].addEventListener('contextmenu', flagnum);
        gezi[i].addEventListener('click', isBeenClicked);

    }
    gridDataSet(9, 10);
}

function createflag(event) {
    event.preventDefault();
    this.classList.toggle('fa');
    this.classList.toggle('fa-flag');
}

let n=10;
function flagnum(){
    n--;
    oneNum.innerHTML = n;
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
            table += "<td><div id=\"g" + i.toString() + "-" + j.toString() + "\" class=\"gezi\"><button name=\"" + i.toString() + "," + j.toString() + "\" class=\"gezi\" οnclick=\"SaoLei(this.name)\"></button></div></td>";
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
    for (let i = 0; i < 30; i++) {
        table += "<tr>";
        for (let j = 0; j < 30; j++) {
            table += "<td><div id=\"g" + i.toString() + "-" + j.toString() + "\" class=\"gezi\"><button name=\"" + i.toString() + "," + j.toString() + "\" class=\"gezi\" οnclick=\"SaoLei(this.name)\"></button></div></td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    mainDiv.innerHTML = table;
}

function createSimple() {

}

function randomInteger(min, max) {
    let ranInt = Math.round(min - 0.5 + (max - min + 0.5) * Math.random());
    // console.log(ranInt); 
    return ranInt;

}

randomInteger(1, 10);
/**
 * 
 * [
 *   [1, 3],
 *   [3, 6],
 * ]
 */
function isPositionExist(arr, a) {
    let num = arr.findIndex(item => item[0] === a[0] && item[1] === a[1]);
    if (num > -1) {
        return true;
    } else {
        return false;
    }
}

function generateMinePostions(width, n) {
    let i = 0;
    let arr = [];
    while (i < n) {
        let a = [];
        a[0] = randomInteger(0, width - 1);
        a[1] = randomInteger(0, width - 1);
        if (!isPositionExist(arr, a)) {
            i++;
            arr.push(a);
        }
        // console.log(arr);
    }
    return arr;
}

function circleNumber(i, j, arr) {

    // console.log(arr);
    let num = 0;
    if (isPositionExist(arr, [i - 1, j - 1])) {
        num++;
    };
    if (isPositionExist(arr, [i - 1, j])) {
        num++;
    }
    if (isPositionExist(arr, [i - 1, j + 1])) {
        num++;
    }
    if (isPositionExist(arr, [i, j - 1])) {
        num++;
    }
    if (isPositionExist(arr, [i, j + 1])) {
        num++;
    }
    if (isPositionExist(arr, [i + 1, j - 1])) {
        num++;
    }
    if (isPositionExist(arr, [i + 1, j])) {
        num++;
    }
    if (isPositionExist(arr, [i + 1, j + 1])) {
        num++;
    }
    return num;
}

console.log(circleNumber(4, 5));

function gridDataSet(width, n) {
    let arr = generateMinePostions(width, n);
    console.log('arr:', arr);
    console.log(clickNum);
    if (clickNum >= width * width - n) {
        console.log('you win');
    }
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < width; j++) {
            let el = document.querySelector('#g' + i.toString() + "-" + j.toString());
            el.dataset.num = circleNumber(i, j, arr);
            // el.innerHTML = circleNumber(i,j,arr);
            if (isPositionExist(arr, [i, j])) {
                el.innerHTML = '';
                el.dataset.num = '';
                // el.classList.add('fa', 'fa-bomb');
                // const fabomb = document.querySelectorAll(".fa-bomb");
                // for (let k = 0; k < n; k++) {
                //     fabomb[k].hidden = true;
                // }
            }
        }
    }

}




function isBeenClicked(event) {
    clickNum++;
    console.log(clickNum);
    this.classList.add('beclick');
    this.dataset.isclick = '1';
    this.innerHTML = this.dataset.num;
    if (this.innerHTML === '0') {
         this.innerHTML = '';
        let arr = this.id.slice(1).split("-");
        console.log(arr);

        let numi1 = arr[0] - 1;
        console.log(numi1)

        let numi2 = +arr[0];
        console.log(numi2)

        let numi3 = +arr[0] + 1;
        console.log(numi3)

        let numj1 = arr[1] - 1;
        console.log(numj1)

        let numj2 = +arr[1];
        console.log(numj2)

        let numj3 = +arr[1] + 1;
        console.log(numj3)
        let btn1 = document.querySelector('#g' + numi1.toString() + '-' + numj1.toString());
        //      btn1.classList.add('beclick');
        // btn1.innerHTML = this.dataset.num;
        if (btn1 && !btn1.dataset.isclick == '1') {
            btn1.click();
        }

        let btn2 = document.querySelector('#g' + numi1.toString() + '-' + numj2.toString());
        if (btn2 && !btn2.dataset.isclick == '1') {
            btn2.click();
        }

        let btn3 = document.querySelector('#g' + numi1.toString() + '-' + numj3.toString());
        if (btn3 && !btn3.dataset.isclick == '1') {
            btn3.click();
        }

        let btn4 = document.querySelector('#g' + numi2.toString() + '-' + numj1.toString());
        if (btn4 && !btn4.dataset.isclick == '1') {
            btn4.click();
        }
        let btn5 = document.querySelector('#g' + numi2.toString() + '-' + numj3.toString());
        if (btn5 && !btn5.dataset.isclick == '1') {
            btn5.click();
        }
        let btn6 = document.querySelector('#g' + numi3.toString() + '-' + numj1.toString());
        if (btn6 && !btn6.dataset.isclick == '1') {
            btn6.click();
        }
        let btn7 = document.querySelector('#g' + numi3.toString() + '-' + numj2.toString());
        if (btn7 && !btn7.dataset.isclick == '1') {
            btn7.click();
        }
        let btn8 = document.querySelector('#g' + numi3.toString() + '-' + numj3.toString());
        if (btn8 && !btn8.dataset.isclick == '1') {
            btn8.click();
        }

        //  console.log(btn1.innerHTML);


        // console.log('hahaha');

    }
    else if (this.innerHTML === '') {
        Array.from(document.querySelectorAll('.gezi[data-num=""]')).forEach(g=>g.classList.add('fa','fa-bomb'));
        
        setTimeout(
            ()=>{
                let isReatart = confirm('you lost!重来吗');
                if (isReatart) {
                    backFirstPage();
                }
            }, 0
        )
    }

    return clickNum;
}

let clickAllNum = isBeenClicked(event);
function markClickNum(width, n) {
    if (clickAllNum >= width * width - n) {
        alert('you win');
    }
}

markClickNum(9, 10);
console.log('ggggg'+clickAllNum);
// console.log(clickNum);op






