console.log('Loaded!');

//Change the text of main text div
var element = document.getElementById('main-text');

element.innerHTML = "New Value";

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function () {
    var internal = setInterval(moveRight, 50);
}