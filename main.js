
// Создание рандомного числа, которое по сути и нужно будет угадать
function calc() {
    var randomNum = Math.floor((Math.random() * 10) + 1);
    return randomNum;
}
var resNum = calc.apply();

var randomNumber;

function startGame() {
    var btns = [],
        randomNumber = calc();



    for(var i = 1; i <= 10; i++) {
        var btn = document.createElement('button');
        btn.setAttribute('data-num', i);
        btn.setAttribute('data-findnum', randomNumber);
        btn.innerText = i;
        btn.onclick = btnClick;
        document.body.appendChild(btn);
    }


}


function btnClick(e) {
    var value = e.target.getAttribute('data-num');
    var findnum = e.target.getAttribute('data-findnum');
    if(value && findnum) {
        if(value == findnum) {
            alert('OK')
        } else {
            alert('try again')
        }
    }
}


window.onload = function() {
    // startGame();
    
}

















// //debug
// console.log(resNum)

// //debug button
// var elemBut = document.getElementById("but_test");
// elemBut.onclick = function (myevent) {
//     if (resNum == resNum) {
//         Num = Math.floor((Math.random() * 10) + 1);
//         resNum = Num;
//         console.log(Num);
//     }
// }

// var butlist = [
//     "but1",
//     "but2",
//     "but3",
//     "but4",
//     "but5",
//     "but6",
//     "but7",
//     "but8",
//     "but9",
//     "but10"
// ];

// var elemPress = document.getElementsByClassName("buttons")[0];

// for (var i in butlist) {
//     var butts = '<button id = "' + butlist[i] + '" data-mubtn="' + (Number(i) + 1) + '">Press Me! ' + (Number(i) + 1) + '</button>';
//     elemPress.innerHTML += butts;
// }

// //var frame = event.target.classList.add('frame');
// elemPress.onclick = function (ev) {
//     var myAttr = ev.target.getAttribute('data-mubtn');
//     //Основная логика угадывания числа, и перезагрузка после попытки
//     if (!!myAttr) {
//         btnClick(myAttr)
//         alert("Ok!");
//         elemBut.onclick();
//     }
//     else if (ev.target.getAttribute('onclick') != "mybutton" + resNum) {
//         alert("Sorry!")
//         elemBut.onclick();
//     }
// }

// function btnClick(num) {
//     //alert(num)
// }

//Перезагрузка после попытки угадывания
/* function reloadPage ()
{
    setInterval (function ()
    {
        location.reload();
    }, 250)
} */
// Массив с картинками
/* var imglinks=
[
    'pictures/1.png',
    'pictures/2.png',
    'pictures/3.png',
    'pictures/4.png',
    'pictures/5.png',
    'pictures/6.png',
    'pictures/7.png',
    'pictures/8.png',
    'pictures/9.png',
    'pictures/10.png'
]; */

//Определяем переменной класс в html
//var elemNum = document.getElementsByClassName('elemNum')[0];

//Присваиваем каждый элемент в массиве к классу
/* for (var i in imglinks)
{
    var images = '<img src = "'+ imglinks[i] +'"data-title =  "pic'+ (Number(i) + 1) + '" >';
    elemNum.innerHTML += images;
}
//Клиекание по элементам в классе 
elemNum.onclick = function(event)
{
        //Основная логика угадывания числа, и перезагрузка после попытки
        if (event.target.getAttribute('data-title') == "pic" + prgNumber)
        
        {
            alert("You are winner!");
            return calc(prgNumber);
        }

        else if (event.target.getAttribute('data-title') != "pic" + prgNumber)
        {   
            alert("Sorry, you didn't guess the nubmer! Correct number is "+ prgNumber +" \nTry again.");
            //reNum();
        } 
        
        {   //Присваивание стиля к элементу
            event.target.classList.add('bordered');
            //reloadPage();
            return calc(prgNumber);
        }
}



 */


