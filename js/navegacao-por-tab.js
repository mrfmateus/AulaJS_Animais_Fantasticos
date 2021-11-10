function initTabNav() {
	const tabMenu = document.querySelectorAll('.js-tabmenu li');
	const tabContent = document.querySelectorAll('.js-tabcontent section');

	function activeTab(index) {
		tabContent.forEach((conteudo) => {
			conteudo.classList.remove('ativo');
		});
		tabContent[index].classList.add('ativo');
	}

	if (tabMenu.length && tabContent.length) {
		tabContent[0].classList.add('ativo');

		function activeTab(index) {
			tabContent.forEach((conteudo) => {
				conteudo.classList.remove('ativo');
			});
			tabContent[index].classList.add('ativo');
		}

		tabMenu.forEach((menu, index) => {
			menu.addEventListener('click', () => {
				activeTab(index);
			});
		});
	}
}

initTabNav();
