


// Создание рандомного числа, которое по сути и нужно будет угадать
var prgNumber = Math.floor((Math.random() * 10) + 1);   
//debug
console.log(prgNumber);

var matrix = [[1,2,3], [4,5,6], [7,8,9]];



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
function reloadPage ()
{
    setInterval (function ()
    {
        location.reload();
    }, 250)
}


//Основная логика угадывания числа, и перезагрузка после попытки
document.onclick = function(resultGame)
{
    if (resultGame.target.getAttribute('data-title') == "img " + prgNumber)
    {
        alert("You are winner!\n\t" + "Lets try again\t");
        
    }
    else if (resultGame.target.getAttribute('data-title') != "img " + prgNumber)
    {
        alert("Sorry, you not guess the Nubmer! Try again.\t"); 
    }
    else (resultGame.target.tagName == "IMG")
    {
        resultGame.target.classList.add('bordered');
        reloadPage();
    }
}
    

