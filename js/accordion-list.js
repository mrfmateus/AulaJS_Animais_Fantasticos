function initAccordionList() {
	const accordionList = document.querySelectorAll('.js-accordion dt');
	const classAtivo = 'ativo';

	if (accordionList.length) {
		accordionList[0].classList.add(classAtivo);
		accordionList[0].nextElementSibling.classList.add(classAtivo);

		function activeAccordionList() {
			this.classList.toggle(classAtivo);
			this.nextElementSibling.classList.toggle(classAtivo);
		}

		accordionList.forEach((item) => {
			item.addEventListener('click', activeAccordionList);
		});
	}
}

initAccordionList();
