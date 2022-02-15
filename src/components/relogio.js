import React ,{ useEffect,useState } from "react";
import './relo.css'

export default function Relogio() {

    const [s, sets] = useState(0)
    const [m, setm] = useState(0)
    const [h, seth] = useState(0)
    useEffect(() => {
        setInterval(function () {
            refreshClock();
        }, 1000);

    }, [])
    function refreshClock() {
        var time = new Date;

        var deg = time.getSeconds() * 6 - 90;
        deg = time.getSeconds() * 6 - 90;
        sets("rotate(" + deg + "deg)")

        deg = time.getMinutes() * 6 - 90;
        setm("rotate(" + deg + "deg)")

        deg = time.getHours() % 12 * 30 - 90;
        seth("rotate(" + deg + "deg)")
    }

    window.onload = function () {
        refreshClock();
    };
    return (
        <div className="relogio z-20">
            <div className="porca-central">
            </div>
            <div className="porca-central2">
            </div>


            <div className="sec-hand">
                <div className="sec" style={{ transform: s }}>
                </div>
            </div>
            <div className="min-hand">
                <div className="min" style={{ transform: m }}>
                </div>
            </div>
            <div className="hr-hand">
                <div className="hr" style={{ transform: h }}>
                </div>
            </div>
        </div>
    )
}