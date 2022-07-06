import React, { useState } from "react";

const CountDown = () => {
    const [min, setMin] = useState<number>(2);
    const [sec, setSec] = useState<number>(30);
    const [minute, setMinute] = useState<string>("10");
    const [seconds, setSeconds] = useState<String>("30");
    

    const counter = () => {
        if (sec >= 1) {
            setSec(sec - 1);
        } else if (sec === 0 && min >= 1) {
            setMin(min - 1);
            setSec(59);
        } else {
            setSec(0);
            setMin(0);
        }

        const secondsString = sec < 10 ? "0" + sec.toString() : sec.toString();
        const minsString = min < 10 ? "0" + min.toString() : min.toString();
        setMinute(minsString);
        setSeconds(secondsString);
    }

    setTimeout(counter, 1000);

    return (
        <div>
            <h1>{`00:${minute}:${seconds}`}</h1>

        </div>
    );
}

export default CountDown;