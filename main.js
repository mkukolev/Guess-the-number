
// Создание рандомного числа, которое по сути и нужно будет угадать
function calc() {
    var randomNum = Math.floor((Math.random() * 10) + 1);
    return randomNum;
}
var resNum = calc.apply();
//debug
console.log(resNum)

rollResult = function (myevent) {
    if (resNum == resNum) {
        Num = Math.floor((Math.random() * 10) + 1);
        resNum = Num;
        console.log(resNum);
        
    }
}

 $("#StartButton").click(function () {
    $("#SplashScreen").hide();
    $("#Game:hidden").show();
    $("#text:hidden").show();
});

var modalwin = document.getElementById('myWin');
var modallos = document.getElementById('myLos');
var modalover = document.getElementById('myOver');

var modbtn = document.getElementsByClassName('buttons')[0];
var spanWin = document.getElementsByClassName("close")[0];
var spanTry = document.getElementsByClassName("exit")[0];

var spanClose = document.getElementsByClassName("close")[1];
var spanExit = document.getElementsByClassName("exit")[1];

var spanOver = document.getElementsByClassName("over")[0];
//ar spanExit = document.getElementsByClassName("exit")[2];

modbtn.onclick = function() {d
    modalwin.style.display = "block";
    modallos.style.display = "block";
    modalover.style.display = "block";

}
//
//
//
/////WIN
spanWin.onclick = function() {
    modalwin.style.display = "none";
}

spanTry.onclick = function() {
    modalwin.style.display = reloadPage() ;
}

/////TRY
spanClose.onclick = function() {
    modallos.style.display = "none";
    }

spanExit.onclick = function() {
modallos.style.display = reloadPage() ;
}

/////OVER
spanOver.onclick = function() {
    modalover.style.display = reloadPage();
}
//
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
//var mybut = "mybutton";
for (var i in butlist) {
     var butts = '<button id = "' + butlist[i]  + '" > Number ' + (Number(i) + 1) + ' </button>';
    elemPress.innerHTML += butts; 
}
document.createElement.butts;

var count = 3;
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


    

