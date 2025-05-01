document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // Cerrar el menú al hacer clic en un enlace (en móvil)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                menu.classList.remove('active');
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí se manejaría el envío del formulario
            // Por ahora solo mostramos un alert de éxito
            alert('Mensaje enviado con éxito. Te contactaremos pronto.');
            contactForm.reset();
        });
    }
    
    // Efecto de scroll suave para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animación de aparición al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.servicio, .acerca-texto, .acerca-imagen, .nosotros-texto, .nosotros-imagen, .miembro');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Iniciar las animaciones y configurar el evento de scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Para elementos que ya están visibles al cargar
}); 