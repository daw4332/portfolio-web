// 1. Selección de elementos del DOM
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');
const darkToggle = document.querySelector('.dark-toggle');
const darkIcon = darkToggle.querySelector('i'); // icono dentro del toggle

// 2. Función para scroll con offset
function scrollToSection(target) {
    const headerOffset = header.offsetHeight;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// 3. Scroll suave al hacer click en enlaces
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

        navMenu.classList.remove('active'); // cerrar menú en móviles
    });
});

// 4. Abrir/cerrar menú hamburguesa
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 5. Toggle modo oscuro con cambio de icono
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        darkIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        darkIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// 6. Mantener modo al recargar y ajustar icono
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark'); // aplicar modo oscuro
        darkIcon.classList.replace('fa-moon', 'fa-sun'); // icono sol
    } else {
        document.body.classList.remove('dark'); // asegurar modo claro
        darkIcon.classList.replace('fa-sun', 'fa-moon'); // icono luna
    }
});