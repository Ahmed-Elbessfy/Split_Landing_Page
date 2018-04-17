var first = document.querySelector(".first");
var second = document.querySelector(".second");
var container = document.querySelector("main");

first.addEventListener('mouseenter', () => {
    container.classList.add('hover-first');
});
first.addEventListener('mouseleave', () => {
    container.classList.remove('hover-first');
});
second.addEventListener('mouseenter', () => {
    container.classList.add('hover-second');
});
second.addEventListener('mouseleave', () => {
    container.classList.remove('hover-second');
});
