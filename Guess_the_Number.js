
//var imgWTF = "https://cdn1.iconfinder.com/data/icons/photo-stickers-words/128/word_2-128.png";
//var img404 = "https://cdn1.iconfinder.com/data/icons/photo-stickers-words/128/word_18-128.png";
//var prg
//persNumber = 6
prgNumber = Math.floor((Math.random() * 10) + 1);
console.log(prgNumber);
persNumber =  Math.floor((Math.random() * 10) + 1);
console.log(persNumber);

/*document.onclick = function(event) {
    if (event.target.tagName == "IMG"); {
        event.target.classList.add('bordered');
    }
}
*/
document.onclick = function(looseOrWin) {
    if (looseOrWin.target.getAttribute('data-title') == "img " + persNumber) {
            alert("Winner");
    }
        else (prgNumber != persNumber); {
        alert("Another number");
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

