export default function ListPicker({values}) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randElement = values[randIdx];
    return (
        <div>
            <p>The list of valies: {values}</p>
            <p>Random Element: {randElement}</p>
        </div>
    );
}