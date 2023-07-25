export default function Clicker({message, btnText}) {
    return(
        <div>
            <button onClick={() => alert(message)}>{btnText}</button>
        </div>
    );
}