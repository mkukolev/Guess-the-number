


// Создание рандомного числа, которое по сути и нужно будет угадать
var prgNumber = Math.floor((Math.random() * 10) + 1);   
//debug
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
    if (resultGame.target.getAttribute('data-title') == "pic" + prgNumber) 
    {
        alert("You are winner!\n\t" + "Lets try again\t");
        resultGame.target.classList.add('bordered');
        reloadPage();

    }
    else if ((resultGame.target.getAttribute('data-title') != "pic" + prgNumber) && (document.getElementsByTagName('HTML') != 'html')) 
    {
        alert("Sorry, you not guess the Nubmer! Try again.\t");
        resultGame.target.classList.add('bordered');
        reloadPage();
    } 

    else (resultGame.target.tagName("pic") == "pic")
    {
        resultGame.target.classList.add('bordered');
        reloadPage();
    }



}
    

