console.log("hello from script file");
const images = ["img/kartinka1.jpg", "img/kartinka2.jpg", "img/kartinka3.jpg", "img/kartinka4.jpg"];
const imageToChange = document.getElementById("image");

function changeimage(){
    console.log("button clicked!");
    let rnd = Math.floor((Math.random() * images.length-1) + 1);
    console.log(rnd);
    imageToChange.src = images[rnd];
}