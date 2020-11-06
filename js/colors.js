const figure = document.getElementById('figure');
const color = 'red';
const colors = ['red', 'green', 'yellow', 'blue', 'grey'];

function paintMe() {
    let rnd = Math.floor((Math.random() * colors.length-1) + 1);
    figure.style.background = colors[rnd];
}