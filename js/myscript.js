function mostrarConfeti() {
    var confeti = document.createElement("div");
    confeti.innerHTML = "&#10024;";
    confeti.style.position = "absolute";
    confeti.style.left = Math.floor(Math.random() * 90) + "vw";
    confeti.style.top = Math.floor(Math.random() * 90) + "vh";
    confeti.style.color = "#630b57";
    confeti.style.fontSize = "48px";
    confeti.style.userSelect = "none";
    confeti.style.pointerEvents = "none";
    document.body.appendChild(confeti);

    setTimeout(function() {
        confeti.remove();
    }, 2000);

}


var audio = document.getElementById("myAudio");
audio.volume =  0.06;
audio.autoplay = true;