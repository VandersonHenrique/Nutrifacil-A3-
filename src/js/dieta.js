
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
    
    
    let userData = {};

    
    window.onload = async () => {
        
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-theme');
        }
        updateThemeToggleVisual();
        
        
        try {
            const response = await fetch('dieta_config.php'); 
            if (!response.ok) {
                if (response.status === 403) {
                    alert('Sua sessão expirou. Por favor, faça login novamente.');
                    window.location.href = 'login.html';
                }
                throw new Error('Falha ao buscar dados do usuário.');
            }
            userData = await response.json();
        } catch (error) {
            console.error('Erro ao carregar dados do perfil:', error);
            alert('Não foi possível carregar seus dados de perfil. Tente recarregar a página ou fazer login novamente.');
        }
    };

    
    function setupSelectionCards(containerId, cardClass) {
        const cards = document.querySelectorAll(`#${containerId} .${cardClass}`);
        cards.forEach(card => {
            card.addEventListener('click', () => {
                cards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });
    }
    setupSelectionCards('objective-selection-1', 'objective-card');
    setupSelectionCards('diet-selection-1', 'diet-card');

    
    const calculateResultsButton = document.getElementById('calculateResultsButton');
    const tmbResultSpan = document.getElementById('tmbResult');
    const imcResultSpan = document.getElementById('imcResult');
    const imcClassificationSpan = document.getElementById('imcClassification');
    const errorMessageResultsDiv = document.getElementById('errorMessageResults');
    const waterGoalDisplay = document.querySelector('.water-goal-display');
    const waterGoalText = document.getElementById('waterGoalText');
    
    function showResultsErrorMessage(message) {
        errorMessageResultsDiv.textContent = message;
        errorMessageResultsDiv.style.display = 'block';
    }

    calculateResultsButton.addEventListener('click', () => {
        const height = parseFloat(document.getElementById('height1').value);
        const weight = parseFloat(document.getElementById('weight1').value);
        const age = userData.age; 
        const gender = userData.gender;

        if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0 || age === undefined || !gender) {
            showResultsErrorMessage('Preencha Altura e Peso e tente novamente. Se o erro persistir, seus dados de perfil podem não ter sido carregados.');
            return;
        }
        errorMessageResultsDiv.style.display = 'none';

        let tmb;
        if (gender === 'masculino') { tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5; } 
        else { tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161; }
        tmbResultSpan.textContent = tmb.toFixed(2);
        
        const imc = weight / ((height / 100) * (height / 100));
        imcResultSpan.textContent = imc.toFixed(2);
        let imcClassification = '';
        if (imc < 18.5) { imcClassification = 'abaixo do peso'; }
        else if (imc >= 18.5 && imc <= 24.9) { imcClassification = 'peso normal'; }
        else if (imc >= 25 && imc <= 29.9) { imcClassification = 'sobrepeso'; }
        else { imcClassification = 'obesidade'; }
        imcClassificationSpan.textContent = imcClassification;

        const waterIntakeInMl = 35 * weight;
        const waterIntakeInLiters = waterIntakeInMl / 1000;
        waterGoalText.textContent = `${waterIntakeInLiters.toFixed(1)} Litros`;
        waterGoalDisplay.style.display = 'flex';
    });

    
    const generateDietButton = document.getElementById('generateDietButton');
    const dietPlanContainer = document.getElementById('dietPlanContainer');
    const dietPlanContent = document.getElementById('dietPlanContent');

    generateDietButton.addEventListener('click', async () => {
        const objectiveCard = document.querySelector('#objective-selection-1 .objective-card.selected');
        const dietCard = document.querySelector('#diet-selection-1 .diet-card.selected');
        const foodCheckboxes = document.querySelectorAll('input[name="food_preferences1"]:checked');
        const errorMessageDiv = document.getElementById('errorMessage1');

        function showErrorMessage(message) { errorMessageDiv.textContent = message; errorMessageDiv.style.display = 'block'; }
        function clearErrorMessage() { errorMessageDiv.textContent = ''; errorMessageDiv.style.display = 'none'; }
        clearErrorMessage();

        if (!objectiveCard || !dietCard) {
            showErrorMessage('Por favor, selecione seu objetivo e o tipo de dieta.');
            return;
        }

        const payload = {
            objective: objectiveCard.dataset.objective,
            dietType: dietCard.dataset.diet,
            preferences: Array.from(foodCheckboxes).map(cb => cb.value)
        };

        dietPlanContent.innerHTML = '<p>Gerando sua dieta personalizada...</p>';
        dietPlanContainer.style.display = 'block';
        
        try {
            const response = await fetch('Gerar_dieta.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Falha na comunicação com o servidor para gerar a dieta.');
            }

            const dieta = await response.json();
            
            let htmlContent = '';
            if (Object.keys(dieta).length === 0) {
                htmlContent = '<p>Não foi possível gerar uma dieta com as opções e restrições selecionadas.</p>';
            } else {
                for (const grupo in dieta) {
                    htmlContent += `<h3>${grupo}</h3><ul>`;
                    dieta[grupo].forEach(alimento => {
                        htmlContent += `<li>${alimento}</li>`;
                    });
                    htmlContent += '</ul>';
                }
            }
            dietPlanContent.innerHTML = htmlContent;

        } catch (error) {
            dietPlanContent.innerHTML = `<p style="color: red;">Erro ao gerar a dieta: ${error.message}</p>`;
            console.error('Erro em gerar a dieta:', error);
        }
    });
});
