document.getElementById('roll-btn').addEventListener('click', rollDice);

async function rollDice() {
    const diceCount = document.getElementById('dice-count').value;
    const diceType = document.getElementById('dice-type').value;
    const container = document.getElementById('dice-container');
    const resultText = document.getElementById('result-text');
    const totalText = document.getElementById('total-text');
    
    // Clear previous results
    container.innerHTML = '';
    resultText.textContent = '';
    totalText.textContent = '';
    
    // Show rolling animation
    for (let i = 0; i < diceCount; i++) {
        const die = document.createElement('div');
        die.className = 'die';
        die.textContent = '?';
        container.appendChild(die);
    }
    
    try {
        // Fetch roll results from backend
        const response = await fetch(`/roll/${diceCount}/${diceType}`);
        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.error);
        }
        
        // Display final results
        container.innerHTML = '';
        data.rolls.forEach(roll => {
            const die = document.createElement('div');
            die.className = 'die';
            die.textContent = roll;
            container.appendChild(die);
        });
        
        resultText.textContent = `Results: ${data.rolls.join(', ')}`;
        totalText.textContent = `Total: ${data.total}`;
    } catch (error) {
        container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}