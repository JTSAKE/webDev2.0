
export default function DoubleDie() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const result = num1 === num2 ? 'You win!' : 'You Lose!';
    return(
        <div>
            <h2>{result}</h2>
            <p>Number 1: {num1}</p>
            <p>Number 2: {num2}</p>
        </div>
    );
}