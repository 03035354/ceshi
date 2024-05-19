var slider = document.querySelector("#slider");
var list = document.querySelector("#list");
var img = document.querySelector("img");
var uli = list.children;
var index = 0;
setInterval(move, 2000);

function move() {
    if (index < uli.length - 1) {
        index++;
        list.style.left = -index * img.offsetWidth + "px";
        list.style.transition = 'left ls';
        if (index == uli.length - 1) {
            setTimeout(function() {
                index = 0;
                list.style.left = -index * img.offsetWidth + "px";
                list.style.transition = 'left 0s';
            }, 1000);
        }
    } else {
        index = 0;
        list.style.left = -index * img.offsetWidth + "px";
        list.style.transition = 'left 0s';
    }
}