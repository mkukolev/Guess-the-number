
// Создание рандомного числа, которое по сути и нужно будет угадать
var prgNumber = Math.floor((Math.random() * 10) + 1);
   
//debug
console.log(prgNumber);

//Перезагрузка после попытки угадывания
function reloadPage ()
{
    setInterval (function ()
    {
        location.reload();
    }, 250)
}
// Массив с картинками
var imglinks=
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
];

//Определяем переменной класс в html
var elemNum = document.getElementsByClassName('elemNum')[0];

//Присваиваем каждый элемент в массиве к классу
for (var i in imglinks)
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
        }

        else if (event.target.getAttribute('data-title') != "pic" + prgNumber)
        {   
            alert("Sorry, you didn't guess the nubmer! Correct number is "+ prgNumber +" \nTry again.");
        } 
        
        {   //Присваивание стиля к элементу
            event.target.classList.add('bordered');
            reloadPage();
        }
}





