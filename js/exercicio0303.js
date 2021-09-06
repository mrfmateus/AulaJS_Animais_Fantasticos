// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
imagens.forEach(function (imagem) {
	console.log(imagem);
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensComecandoComImagem = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagensComecandoComImagem);
imagensComecandoComImagem.forEach(function (imagem) {
	console.log(imagem);
});

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);
linksInternos.forEach(function (item) {
	console.log(item);
});

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricaoH2 = document.querySelector('.animais-descricao h2');
console.log(animaisDescricaoH2);

// Selecione o último p do site
const todosP = document.querySelectorAll('p');
console.log(todosP[todosP.length - 1]);
