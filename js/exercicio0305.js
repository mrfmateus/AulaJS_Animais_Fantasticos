// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu ul li');
itensMenu.forEach((item) => {
	item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
	if (index != 0) {
		item.classList.remove('ativo');
	}
});

console.log(itensMenu);

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
console.log(imagens);
imagens.forEach((item) => {
	if (item.hasAttribute('alt')) {
		console.log(`A imagem ${item.getAttribute('src')} possui o atributo alt!`);
	} else {
		console.log(`A imagem ${item.getAttribute('src')} não possui o atributo alt!`);
	}
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu a[href^="http"]');
linkExterno.setAttribute('href', 'https://www.google.com.br/');
console.log(linkExterno);
