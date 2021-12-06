function initTabNav() {
	const tabMenu = document.querySelectorAll('.js-tabmenu li');
	const tabContent = document.querySelectorAll('.js-tabcontent section');
	const classAtivo = 'ativo';

	function activeTab(index) {
		tabContent.forEach((conteudo) => {
			conteudo.classList.remove(classAtivo);
		});
		tabContent[index].classList.add(classAtivo);
	}

	if (tabMenu.length && tabContent.length) {
		tabContent[0].classList.add(classAtivo);

		function activeTab(index) {
			tabContent.forEach((conteudo) => {
				conteudo.classList.remove(classAtivo);
			});
			tabContent[index].classList.add(classAtivo);
		}

		tabMenu.forEach((menu, index) => {
			menu.addEventListener('click', () => {
				activeTab(index);
			});
		});
	}
}

initTabNav();
