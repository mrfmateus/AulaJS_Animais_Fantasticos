// Duplique o menu e adicione ele em copy
const copy = document.querySelector('.copy');
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDtFaq = document.querySelector('.faq > dl > dt');

// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDtFaq.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;
