// ScrollReveal().reveal('.headline', { delay: 300, reset: true });
// ScrollReveal().reveal('.headline1', { delay: 450, reset: true });
// ScrollReveal().reveal('.headline2', { delay: 600, reset: true });
// ScrollReveal().reveal('.headline3', { delay: 750, reset: true });
// ScrollReveal().reveal('.headline4', { delay: 900, reset: true });
var h = document.getElementById("heart");
h.onmouseenter = function() {
    h.src = './src/img/icons8-heart.gif'
}
h.onmouseleave = function() {
    h.src = './src/img/heart (6) 1.png'
}
var dropvalue = document.getElementsByClassName('dropvalue')
var items = document.getElementsByClassName('dropdown__item');
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        // items[i].classList.toggle('selected')
        var text = items[i].innerText;
        for (let j = 0; j < dropvalue.length; j++) {
            dropvalue[j].innerText = text;
        }
    }
}
var t = document.querySelector('.dropdown1:checked~.dropdown__icon .dropdown__items')
console.log()