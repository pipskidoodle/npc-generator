// Module for rolling dice

export async function rollDice(dice) {

    // Define output variable
        let outcome = []

    // Use a regular expression to match digits
        const [count, faces] = dice.split('d').map(Number); // This will find all digits in the string

    // Roll Dice
        for (let i = 0; i < count; i++) {
            outcome.push(Math.floor(Math.random() * faces) + 1)
        }

    // Rearrange rolls in ascending order
        outcome.sort((a, b) => a - b);
        
    // Return rolls
        return outcome
        
}
