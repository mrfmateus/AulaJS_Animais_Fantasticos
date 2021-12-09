function initScrollAnimation() {
	const sections = document.querySelectorAll('.js-scroll');
	if (sections.length) {
		function animateScroll() {
			sections.forEach((section) => {
				const sectionTop = section.getBoundingClientRect().top;
				const animationHeight = window.innerHeight * 0.5;
				const isSectionVisible = sectionTop - animationHeight < 0;
				if (isSectionVisible) {
					section.classList.add('ativo');
				} else {
					section.classList.remove('ativo');
				}
			});
		}

		animateScroll();
		window.addEventListener('scroll', animateScroll);
	}
}

initScrollAnimation();
