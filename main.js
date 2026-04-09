const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

// Función para scroll con offset
function scrollToSection(target) {
    const headerOffset = header.offsetHeight;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Scroll suave al hacer click en cualquier enlace
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');

        if (href === "#") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const target = document.querySelector(href);
            scrollToSection(target);
        }

        // Cierra el menú si está activo (móviles)
        navMenu.classList.remove('active');
    });
});

// Abrir/cerrar menú hamburguesa
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
}); 

const darkToggle = document.querySelector('.dark-toggle');

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Guardar preferencia
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Mantener modo al recargar
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
});


