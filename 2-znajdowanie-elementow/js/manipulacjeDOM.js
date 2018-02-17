"use strict";

var mainHeader = document.getElementById('main-header');
//Przypisujemy nagłówek strony do zmiennej

mainHeader.innerHTML = "treść nagłówka";
//Dodajemy treść do nagłówka

mainHeader.outerHTML = "<p>Treść nagłówka</p>";
//podmienia element łącznie ze znacznikiem

var link = document.getElementsByClassName('link')[0];
//Przypisujemy pierwszy link do zmiennej. Nawias oznacza pierwszy element z klasą link [0]. Tworzy się tablica nawet jak jest to jeden element.

//link.href = "http://akademia108.pl";
////nadpisujemy gdzie ma kierować link
//
//link.className = "nowa-klasa";
////nadpisujemy nazwę klasy w linku
//
//console.classList.add("nowa-nowa-klasa");
////dodajemy kolejną klasę

link.style.backgroundColor = "yellow";