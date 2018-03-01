
// Создание рандомного числа, которое по сути и нужно будет угадать
function calc() {
    var randomNum = Math.floor((Math.random() * 10) + 1);
    return randomNum;
}
var resNum = calc.apply();

//debug#1
console.log(resNum)

rollResult = function (myevent) {
    if (resNum == resNum) {
        Num = Math.floor((Math.random() * 10) + 1);
        resNum = Num;
//debug#2
        console.log(resNum);
        
    }
}

 $("#StartButton").click(function () {
    $("#SplashScreen").hide();
    $("#Game:hidden").show();
    $("#text:hidden").show(); 
    //$("#DiffButton:hidden").show();
}); 


//Difficulty in work

/* $("#StartButton").click(function () {
    $("#StartButton").hide();
    $("#EasyButton:hidden").show();
    $("#NormalButton:hidden").show();
    $("#HardButton:hidden").show();
}); */

/* $("#EasyButton").click(function () {
});

$("#NormalButton").click(function () {
});

$("#HardButton").click(function () {
}); */

//Modal windows
var modalwin = document.getElementById('myWin');
var modallos = document.getElementById('myLos');
var modalover = document.getElementById('myOver');

//Buttons' in windos for WIN
var modbtn = document.getElementsByClassName('buttons')[0];
var spanWin = document.getElementsByClassName("close")[0];
var spanTry = document.getElementsByClassName("exit")[0];
//Button's in windows for TRY
var spanClose = document.getElementsByClassName("close")[1];
var spanExit = document.getElementsByClassName("exit")[1];
//Button in windows for Overv
var spanOver = document.getElementsByClassName("over")[0];
//Open modal windows
modbtn.onclick = function() {d
    modalwin.style.display = "block";
    modallos.style.display = "block";
    modalover.style.display = "block";
}

//
//
///// WIN OK!
spanWin.onclick = function() {
    modalwin.style.display = "none";
}
///// WIN EXIT
spanTry.onclick = function() {
    modalwin.style.display = reloadPage() ;
}

///// TRY OK!
spanClose.onclick = function() {
    modallos.style.display = "none";
    }
///// TRY EXIT
spanExit.onclick = function() {
modallos.style.display = reloadPage() ;
}

/////OVER RESTART GAME
spanOver.onclick = function() {
    modalover.style.display = reloadPage();
}
//
//


function reloadPage() {
    setTimeout (function ()
    {
        location.reload();
    }, 50)
} 

var butlist = [
    "but1",
    "but2",
    "but3",
    "but4",
    "but5",
    "but6",
    "but7",
    "but8",
    "but9",
    "but10"
];

var elemPress = document.getElementsByClassName("buttons")[0];

for (var i in butlist) {
     var butts = '<button id = "' + butlist[i]  + '" > Number ' + (Number(i) + 1) + ' </button>';
    elemPress.innerHTML += butts; 
}
document.createElement.butts;
//difficult count's
//var count = [1, 3, 5];

var count = 5;
var point = 0;
var tryResult = document.getElementById('try').innerHTML = "The tries:" + count;
var pntResult = document.getElementById('pnt').innerHTML = "You're points:" + point;

//Основная логика угадывания числа, и перезагрузка после попытки
elemPress.onclick = function (ev) {
    if (count > 0) {
        if (ev.target.getAttribute('id') == "but" + resNum) {
            $('#myWin').show()
            point++
            document.getElementById('pnt').innerHTML = "You're points:" + point;
            rollResult();
        }
        else if (ev.target.getAttribute('id') != "but" + resNum)  {
            $('#myLos').show()
            rollResult();
            count = count - 1;
            document.getElementById('try').innerHTML = "The tries:" + count;

            if (count == 0) {
                $('#myOver').show();
            }
        }       
    }
}


    

