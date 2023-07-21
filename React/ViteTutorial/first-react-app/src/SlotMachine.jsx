export default function SlotMachine({v1, v2, v3}) {
    const winningVals = v1 === v2 && v2 === v3;
    return(
        <div>
            <h1>{v1} {v2} {v3}</h1>
            <h2 style={{color: winningVals ? 'green' : 'red'}}>
                {winningVals ? 'You win!' : 'You Lose!'}
            </h2>
            {winningVals && <h3>Congrats!</h3>}
        </div>
    );
}