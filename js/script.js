const navSlide = () => {
	const burgerMenu = document.querySelector('.burgerMenu');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burgerMenu.addEventListener('click', () => {

// Toggle Nav
		nav.classList.toggle('nav-active');

// Animate Links

        navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';

			} else {
				link.style.animation = `navLinkFade 0.3s ease forwards ${index / 5 + 0.3}s`;
				console.log(index / 3);

			}	
		});

		// Burger Animation
		burgerMenu.classList.toggle('toggle'); 
	});	
}

navSlide();
