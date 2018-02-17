"use strict";


var istniejacyWezel = 
document.getElementById('parFirst').children[3];
//przypisz do zmiennej istniejący węzeł

//tworzenie węzła nie oznacza jeszcze że znajdzie się on na stronie, trzeba go będzie dopiąć

var newElement = document.createElement('p');
//stwórz nowy element p

console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf'); 
//stwórz nowy tekst dla elementu p

newElement.appendChild(newElementContent);
//dodajemy tekst do paragrafu p

istniejacyWezel.appendChild(newElement);
//

istniejacyWezel.removeChild(newElement);
//usuwa element

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(newElement, istniejacyWezel);

//Dodaj znacznik <br> po każdym linku i usuń z nich atrybut klasy

var allLinks = document.querySelectorAll('a');
//przypisz do zmiennej tablicę ze wszystkimi linkami

//console.log(allLinks);

//Array.form("nodeList")

for (var i=0; i < allLinks.length; i++) {
    var br = document.createElement('br'); // stwórz element <br>
    
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling); 
    
    //Dodaj br po każdym linku
    
    allLinks[i].removeAttribute('class'); // usuń atrybut klasy
}





