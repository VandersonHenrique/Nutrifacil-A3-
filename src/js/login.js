
document.addEventListener('DOMContentLoaded', () => {

    const themeToggleSwitch = document.getElementById('theme-toggle');
    const body = document.body;
    const thumbIcon = themeToggleSwitch.querySelector('.icon');

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            thumbIcon.textContent = '🌙'; 
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            thumbIcon.textContent = '☀️'; 
            localStorage.setItem('theme', 'light');
        }
    }

    themeToggleSwitch.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            applyTheme('light');
        } else {
            applyTheme('dark');
        }
    });

    const errorMessageDiv = document.getElementById('errorMessage');

    function initializePage() {
        
        if (localStorage.getItem('theme') === 'dark') {
            applyTheme('dark');
        } else {
            applyTheme('light'); 
        }
        
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('error')) {
            const error = urlParams.get('error');
            if (error === 'invalid_credentials') {
                errorMessageDiv.textContent = 'E-mail ou senha inválidos.';
                errorMessageDiv.style.display = 'block';
            }
        }
    }

    initializePage();
});
