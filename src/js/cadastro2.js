
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

    
    window.onload = () => {
        
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
        }
        updateThemeToggleVisual();

        
        const name = sessionStorage.getItem('temp_name');
        const email = sessionStorage.getItem('temp_email');
        const password = sessionStorage.getItem('temp_password');

       
        if (!name || !email || !password) {
            alert('Por favor, inicie o cadastro na primeira página.');
            window.location.href = 'cadastro.html';
            return;
        }

        
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('password').value = password;
    };

    const sexualityCards = document.querySelectorAll('.sexuality-card');
    const hiddenSexualityInput = document.getElementById('sexuality');
    const dobInput = document.getElementById('dob');
    const noAllergiesCheckbox = document.getElementById('no-allergies');
    const otherAllergiesCheckboxes = document.querySelectorAll('input[name="allergies[]"]:not(#no-allergies)');
    const profileForm = document.getElementById('profileForm');
    const errorMessageDiv = document.getElementById('errorMessage');

    
    sexualityCards.forEach(card => {
        card.addEventListener('click', () => {
            sexualityCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            hiddenSexualityInput.value = card.getAttribute('data-sexuality');
            clearErrorMessage();
        });
    });

    
    noAllergiesCheckbox.addEventListener('change', () => {
        if (noAllergiesCheckbox.checked) {
            otherAllergiesCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
                checkbox.disabled = true;
            });
        } else {
            otherAllergiesCheckboxes.forEach(checkbox => {
                checkbox.disabled = false;
            });
        }
        clearErrorMessage();
    });

    otherAllergiesCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked && noAllergiesCheckbox.checked) {
                noAllergiesCheckbox.checked = false;
                otherAllergiesCheckboxes.forEach(other => other.disabled = false);
            }
            clearErrorMessage();
        });
    });

    dobInput.addEventListener('input', () => {
        clearErrorMessage();
    });

    function showErrorMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = 'block';
    }

    function clearErrorMessage() {
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.display = 'none';
    }

    
    profileForm.addEventListener('submit', (event) => {
        clearErrorMessage();

        if (!dobInput.value) {
            event.preventDefault();
            showErrorMessage('Por favor, preencha sua Data de Nascimento.');
            return;
        }

        if (!hiddenSexualityInput.value) {
            event.preventDefault();
            showErrorMessage('Por favor, selecione seu sexo.');
            return;
        }

        let allergySelected = Array.from(otherAllergiesCheckboxes).some(cb => cb.checked) || noAllergiesCheckbox.checked;
        if (!allergySelected) {
            event.preventDefault();
            showErrorMessage('Por favor, selecione suas alergias ou marque "Nenhuma".');
            return;
        }

        
        sessionStorage.removeItem('temp_name');
        sessionStorage.removeItem('temp_email');
        sessionStorage.removeItem('temp_password');
    });
});
