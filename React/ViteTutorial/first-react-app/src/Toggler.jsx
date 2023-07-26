import { useState } from "react";
import './Toggler.css'

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [isMiddleFinger, setIsMiddleFinger] = useState(true)
    const [middleFingerNum, setMiddleFingerNum] = useState(0)
    const toggleIsHappy = () => setIsHappy(!isHappy);
    const toggleIsMiddleFinger = () => {
        setIsMiddleFinger(!isMiddleFinger)
        setMiddleFingerNum(middleFingerNum + 1)
    };
    return(
    <div>
        <p className="Toggler" onClick={toggleIsHappy}>
            {isHappy ? '😀' : '😥'}
            </p>
        <p>You have been flipped off: {middleFingerNum} times</p>
        <p className="Toggler" onClick={toggleIsMiddleFinger}>
            {isMiddleFinger ? '✊' : '🖕'}
            </p>
    </div>
    );
}