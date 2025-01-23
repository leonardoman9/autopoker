// Create status display element
const statusBox = document.createElement('div');
statusBox.style.position = 'fixed';
statusBox.style.top = '20px';
statusBox.style.right = '20px';
statusBox.style.backgroundColor = '#fff';
statusBox.style.padding = '10px';
statusBox.style.border = '1px solid #ccc';
statusBox.style.borderRadius = '5px';
statusBox.style.zIndex = '9999';
statusBox.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
document.body.appendChild(statusBox);

let pokesCount = 0;
let lastPokeTime = null;

function updateStatusDisplay() {
    const lastPokeTimeString = lastPokeTime 
        ? new Date(lastPokeTime).toLocaleTimeString()
        : 'Nessun poke inviato';
    
    statusBox.innerHTML = `
        <strong>AutoPoke Status:</strong><br>
        Poke inviati: ${pokesCount}<br>
        Ultimo poke: ${lastPokeTimeString}
    `;
}

function autoPoke() {
    // Common translations of "Poke back" in different languages
    const pokeTranslations = [
        'Poke Back',      // English
        'Rispondi al poke', // Italian
        'Devolver el toque', // Spanish
        'Renvoyer un poke', // French
        'Zurückstupsen',    // German
        'Retribuir',        // Portuguese
        'Poke terug',       // Dutch
        'Отправить пок в ответ' // Russian
    ];
    
    // Create a selector that matches any of these translations
    const selector = pokeTranslations
        .map(text => `[aria-label*="${text}"]`)
        .join(', ');
    
    const pokeButtons = document.querySelectorAll(selector);
    
    pokeButtons.forEach((button, index) => {
        setTimeout(() => {
            try {
                button.click();
                pokesCount++;
                lastPokeTime = Date.now();
                updateStatusDisplay();
                console.log(`Poke sent (${pokesCount} total)`);
            } catch (error) {
                console.error('Error sending poke:', error);
            }
        }, index * 500);
    });
}

// Initial update
updateStatusDisplay();

// Run every 3 seconds
setInterval(autoPoke, 3000);
autoPoke();
console.log('Script auto-poke avviato! Esecuzione ogni 3 secondi.');