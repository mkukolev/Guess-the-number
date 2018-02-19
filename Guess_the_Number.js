

/*var elems = (prgNumber, persNumber)

choiseNumber = function () {
    Math.floor((Math.random() * 10) + 1);
console.log();
}
*/
var prgNumber = Math.floor((Math.random() * 10) + 1); 
console.log(prgNumber);

document.onclick = function(resultGame)
{
    if (resultGame.target.getAttribute('data-title') == "img " + String(prgNumber))
    {
        alert("You are winner!");
        alert(this.location.reload("reboot"))
        

    }
    else if (resultGame.target.getAttribute('data-title') != "img " + String(prgNumber))
    {
        alert("Sorry, you not guess the Nubmer!");   
         
    }
    else (resultGame.target.tagName == "IMG")
    {
        resultGame.target.classList.add('bordered');
    }
}

/*document.onclick = function(resultGame) 
{
    if (resultGame.target.getAttribute('data-title') == "img " + String(prgNumber))
    {
            alert("You are winner!");
    }
    else if (resultGame.target.getAttribute('data-title') != "img " + String(prgNumber))
    {
        alert("Sorry, you not guess the Nubmer!");   
    }
    else ( x == 0)
    {

    } 
     
*/
 /*
 window.onload = function (img) {
    var imgs = document.getElementsByTagName('IMG');
    for (var i in imgs) {
        imgs[i].onclick = function () {
            alert(this.getAttribute('data-title'))        
        }
    }
  }   
*/


