

var elems = (prgNumber, persNumber)

choiseNumber = function () {
    Math.floor((Math.random() * 10) + 1);
console.log();
}

choiseNumber(persNumber, prgNumber)


/*prgNumber = Math.floor((Math.random() * 10) + 1);
console.log(prgNumber);
persNumber =  Math.floor((Math.random() * 10) + 1);
console.log(persNumber);
*/
/*document.onclick = function(event) {
    if (event.target.tagName == "IMG"); {
        event.target.classList.add('bordered');
    }
}
*/

document.onclick = function(winGame) {
    if (winGame.target.getAttribute('data-title') == "img " + persNumber) {
            alert("You are winner!");
    }
        else (prgNumber != persNumber); {
        alert("Sorry, you not guess the Nubmer!");
    } 
}
 /*
 window.onload = function() {
    var imgs = document.getElementsByTagName('IMG');
    for (var i in imgs) {
        imgs[i].onclick = function () {
            alert(this.getAttribute('data-title'))        
        }
    }
  }   
  */

