"use strict";

var secondLink = document.getElementsByTagName('a')[1];
// Tworzymy zmienną z drugim linkiem

function alarm(e) {
    e.preventDefault(); //zapobiegamy domyślnej akcji
    console.log('kliknięto kolejny link');
    thirdLink.style.backgroundColor = "red";
    console.log(e.type);
}

secondLink.onclick = alarm;
//wywołujemy funkcę alarm na drugim kliknięciu

var thirdLink = document.getElementsByTagName('a')[2];
//Tworzymy zmienną z trzecim linkiem

thirdLink.addEventListener("click", alarm);

//thirdLink.removeEventListener("click", alarm);



// Efekt powiększenia napisu po najechaniu 
var mainHeader= document.getElementById('main-header');
// Przypisujemy nagłówek strony do zmiennej

function resize(e) {
    if(e.type == 'mouseover') {
        mainHeader.style.fontSize = "70px";
    }
    else {
        mainHeader.style.fontSize = "inherit"; //Przywróć domyślną wielkość po zjechaniu
    }
}

mainHeader.onmouseover = resize;
mainHeader.onmouseout = resize;



