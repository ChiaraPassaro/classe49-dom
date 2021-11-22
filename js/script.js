// Ciao Visitatore!
// Imposta il nome di colore rosso in vari modi:
// Solo con HTML + CSS
// Scrivendo su element.style
// Aggiungendo la classe con JS

// const span = document.querySelector('span');
// span.classList.add('red-color');
// span.classList.remove('red-color');


const buttonAdd = document.getElementById('add');
const buttonRemove = document.getElementById('remove');
const buttonAddRemove = document.getElementById('add-remove');

const span = document.querySelector('span');
buttonAdd.addEventListener('click', function () {
  span.classList.add('red-color');
});
buttonRemove.addEventListener('click', function () {
  span.classList.remove('red-color');
});

buttonAddRemove.addEventListener('click', function () {
  const classSpan = span.className;
  console.log(classSpan);

  if (classSpan == "red-color") {
    span.classList.remove('red-color');
  } else {
    span.classList.add('red-color');
  }
});

// Al click di un pulsante, deve apparire un alert con un numero random
const buttonRand = document.getElementById('numRand');
buttonRand.addEventListener('click', function () {
  alert(Math.floor(Math.random() * 101));
});


//Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito




//prendiamo un elemento per id
// const elementDom = document.getElementById('my-element');
// console.log(elementDom);
// //Tipo di dato
// console.log(typeof elementDom);

// //prendiamo tramite selezione css solo il primo elemento che corrisponde alla selezione
// const elementQuerySelector = document.querySelector('.red.yellow');
// const elementSpan = document.querySelector('span');
// console.log(elementSpan);

// console.log(elementQuerySelector);

//classList e un object ha metodi e proprieta
// console.log(elementQuerySelector.classList);

//Prendiamo in forma stringa tutte le classi di un elemento
// console.log(elementQuerySelector.classList.value);

//sovrascriviamo i valori
// elementQuerySelector.classList.value = 'pluto';

//aggiungiamo o rimuoviamo classi
// elementQuerySelector.classList.add('blue');
// elementQuerySelector.classList.remove('red');


//className ci restituisce una stringa
// console.log(elementQuerySelector.className);
// elementQuerySelector.className += ' pippo';

// //con style possiamo aggiungere css inline
// elementQuerySelector.style.borderBottom = '1px solid green';


// const ul = document.querySelector('.list');
// //creiamo un elemento del DOM 
// const li = document.createElement("li");
// console.log(li);
// li.append('pippo');

// //append aggiunge alla fine dell'innerhtml dell'elemento dal quale partiamo
// ul.append(li);
// //append aggiunge all'inizio fine dell'innerhtml dell'elemento dal quale partiamo
// ul.prepend(li);

// const input = document.querySelector('input');
// // console.log(input.value);
// const button = document.getElementById('button');

// button.addEventListener('click', function () {
//   console.log(input.value);

// });
