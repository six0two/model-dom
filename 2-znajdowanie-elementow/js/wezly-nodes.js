"use strict";

var pierwszyDiv = document.getElementById('parFirst');

console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
//pobiera elementy ze znakami białymi łącznie ze spacjami w tekście

console.log(pierwszyDiv.childNodes[3]);
//konkretny element z tablicy

console.log(pierwszyDiv.children);

console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);

var childNodesDiva = pierwszDiv.childNodes;

childNodesDiva.forEach(function (element) 
{
    if(element.nodeType == 8) {
        console.log(element);
    }
});





