
document.addEventListener('DOMContentLoaded', () => {

    
    const themeToggleSwitch = document.getElementById('theme-toggle');
    const body = document.body;
    const switchThumb = themeToggleSwitch.querySelector('.switch-thumb');
    const thumbIcon = switchThumb.querySelector('.icon');

    function updateThemeToggleVisual() {
        if (body.classList.contains('dark-theme')) {
            thumbIcon.textContent = '🌙';
        } else {
            thumbIcon.textContent = '☀️';
        }
    }

    themeToggleSwitch.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        updateThemeToggleVisual();
    });

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }
    updateThemeToggleVisual();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const registerButton = document.getElementById('registerButton');
    const errorMessageDiv = document.getElementById('errorMessage');

    function showErrorMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = 'block';
    }

    function clearErrorMessage() {
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.display = 'none';
    }

    nameInput.addEventListener('input', clearErrorMessage);
    emailInput.addEventListener('input', clearErrorMessage);
    passwordInput.addEventListener('input', clearErrorMessage);

    registerButton.addEventListener('click', (event) => {
        event.preventDefault();
        clearErrorMessage();

        if (nameInput.value.trim() === '') {
            showErrorMessage('Por favor, preencha seu Nome.');
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showErrorMessage('Por favor, insira um E-mail válido.');
            return;
        }

        if (passwordInput.value.trim().length < 6) {
            showErrorMessage('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
 
        sessionStorage.setItem('temp_name', nameInput.value.trim());
        sessionStorage.setItem('temp_email', emailInput.value.trim());
        sessionStorage.setItem('temp_password', passwordInput.value.trim());

        window.location.href = 'cadastro2.html';
    });
});
