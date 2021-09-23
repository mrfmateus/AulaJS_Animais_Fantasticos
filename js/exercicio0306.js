// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens
const todasImagens = document.querySelectorAll('img');
let larguraTotal = 0;
todasImagens.forEach((img) => {
    larguraTotal += img.offsetWidth;
});
console.log(larguraTotal);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
    if ((link.offsetHeight >= 48) && (link.offsetWidth >= 48)) {
        console.log(`${link} possui o mínimo recomendado!`);
    } else {
        console.log(`${link} não possui o mínimo recomendado!`);
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu');
const small = window.matchMedia('(max-width: 720px)').matches;
if (small) {
    menu.classList.add('menu-mobile');
}
console.log(menu.classList);