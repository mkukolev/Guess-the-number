


// Создание рандомного числа, которое по сути и нужно будет угадать
var prgNumber = Math.floor((Math.random() * 10) + 1);   
var imglink = "pictures/1.png";
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

const img = document.querySelector('img');

//Основная логика угадывания числа, и перезагрузка после попытки
document.onclick = function(resultGame)

{
    if (resultGame.target.getAttribute('data-title') == "pic" + prgNumber) 
    {
        alert("You are winner!\n\t" + "Lets try again\t");

    }

    else if (resultGame.target.getAttribute('data-title') != "pic" + prgNumber)
    {
        alert("Sorry, you not guess the Nubmer! Try again.\t");
    } 

    else (document.target.getElementsByTagName("IMG") == "IMG")
    {
        resultGame.target.classList.add('bordered');
        reloadPage();
    }

}

console.log(document.getElementById("img1").tagName);


console.log(document.getElementsByTagName('IMG'));
console.log(imglink);