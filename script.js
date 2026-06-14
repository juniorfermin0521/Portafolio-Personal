// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Cambiar ícono
    if (theme === 'dark') {
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
    
    // Actualizar meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    metaTheme.setAttribute('content', theme === 'dark' ? '#1e2937' : '#3b82f6');
}

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Toggle
themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-bs-theme');
    setTheme(current === 'light' ? 'dark' : 'light');
});

// Formulario
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '✅ Enviado correctamente!';
    btn.disabled = true;
    
    setTimeout(() => {
        form.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        // Alerta Bootstrap
        const alert = document.createElement('div');
        alert.className = 'alert alert-success mt-3';
        alert.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
        form.appendChild(alert);
        
        setTimeout(() => alert.remove(), 5000);
    }, 1500);
});

// Smooth scroll para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});