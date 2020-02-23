console.log('I\'m Working.');

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();