function testf(){
    alert("deneme başarılı");
}

function randomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var clr =  "#" + randomColor;

    return clr;
}

function changeColortoBlue() {
    btnb.style.color = "blue";
}

function changeColortoRandom() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var clr =  "#" + randomColor;

    btnr.style.color = clr;
    colorText.innerHTML = clr;
    colorText.backgroundColor = "#fff";
    document.body.style.backgroundColor = clr;
}


