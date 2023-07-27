import { useState } from "react"
import './ColorBox.css'

function randomChoice(arr) {
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum]

}

export default function Colorbox({colors}) {
    let [color, setColor] = useState(randomChoice(colors));
    const changeColor = () => {
        const randomColor = randomChoice(colors)
        setColor(color = randomColor);
    }
    return(
        <div
        className="ColorBox"
        onClick={changeColor}
        style={{backgroundColor: color}}
        ></div>
    ); 
} 