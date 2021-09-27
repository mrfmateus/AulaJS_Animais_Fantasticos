// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleClickLinksInternos(event) {
	event.preventDefault();
	linksInternos.forEach((link) => {
		link.classList.remove('ativo');
	});
	this.classList.add('ativo');
}

linksInternos.forEach((link) => {
	link.addEventListener('click', handleClickLinksInternos);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementosBody = document.querySelectorAll('body *');

function handleClickTodosElementosBody(event) {
	event.preventDefault();
	console.log(event.currentTarget);
}

todosElementosBody.forEach((elemento) => {
	elemento.addEventListener('click', handleClickTodosElementosBody);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removeElemento(event) {
	event.preventDefault();
	event.currentTarget.remove();
}

todosElementosBody.forEach((elemento) => {
	elemento.addEventListener('click', removeElemento);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
const todosElementosSite = document.querySelectorAll('*');

function handleKeyDown(event) {
	if (event.key === 't') {
		document.documentElement.classList.toggle('aumenta-fonte');
	}
}

window.addEventListener('keydown', handleKeyDown);
