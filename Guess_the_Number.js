


 // Создание рандомного числа, которое по сути и нужно будет угадать
var prgNumber = Math.floor((Math.random() * 10) + 1);   
console.log(prgNumber);

/*var buttons = document.getElementsByTagName('button');
for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = function ()
    {
        if (this.id === 'test1')
        {
            document.body.className = 'test1';
        } 
        else if (this.id === 'test2'); 
        {
            document.body.className = 'night';
        }
    };
};
*/

//Перезагрузка после попытки угадывания
function reloadPage () {
    setInterval (function ()
     {
        location.reload();
    }, 250)
}


//Основная логика угадывания числа, и перезагрузка после попытки
document.onclick = function(resultGame)
{
    if (resultGame.target.getAttribute('data-title') == "img " + String(prgNumber))
    {
        alert("You are winner!\n" + "Lets try again");
        reloadPage();
        

    }
    else if (resultGame.target.getAttribute('data-title') != "img " + String(prgNumber))
    {
        alert("Sorry, you not guess the Nubmer! Try again."); 
      
    }
    else (resultGame.target.tagName == "IMG")
    {
        resultGame.target.classList.add('bordered');
        reloadPage();
    }
}
    

