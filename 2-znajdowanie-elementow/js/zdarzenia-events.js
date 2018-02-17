"use strict";

var secondLink = document.getElementsByTagName('a')[1];
// Tworzymy zmienną z drugim linkiem

function alarm(e) {
    e.preventDefault(); //zapobiegamy domyślnej akcji
    console.log('kliknięto kolejny link');
    
    console.log(e.type);
}

secondLink.onclick = alarm;
//wywołujemy funkcę alarm na drugim kliknięciu