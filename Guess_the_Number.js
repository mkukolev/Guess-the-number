
//var imgWTF = "https://cdn1.iconfinder.com/data/icons/photo-stickers-words/128/word_2-128.png";
//var img404 = "https://cdn1.iconfinder.com/data/icons/photo-stickers-words/128/word_18-128.png";
//var prg

prg = Math.floor((Math.random() * 10) + 1);
console.log(prg);

document.onclick = function(event) {
    if (event.target.tagName == "IMG"); {
        event.target.classList.add('bordered');
    }
}

 window.onload = function() {
    var imgs = document.getElementsByTagName('IMG');
    for (var i in imgs) {
        imgs[i].onclick = function () {
            alert(this.getAttribute('data-title'))        
        }
    }
  }   

  document.onclick = function(secEvent) {
    
  }
