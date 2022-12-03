import React from "react";

const Clock = ({ hourRatio, minuteRatio, secondRatio }) => {

    return (
        <div className="clock">
            <div className="hand hour" style={{ transform: `translate(-50%) rotate(${hourRatio * 360}deg)` }}></div>
            <div className="hand minute" style={{ transform: `translate(-50%) rotate(${minuteRatio * 360}deg)` }}></div>
            <div className="hand second" style={{ transform: `translate(-50%) rotate(${secondRatio * 360}deg)` }}></div>
            {/* style === responsible for moving clocks hands properly */}

            <div className="number number1"><div>1</div></div>
            <div className="number number2"><div>2</div></div>
            <div className="number number3"><div>3</div></div>
            <div className="number number4"><div>4</div></div>
            <div className="number number5"><div>5</div></div>
            <div className="number number6"><div>6</div></div>
            <div className="number number7"><div>7</div></div>
            <div className="number number8"><div>8</div></div>
            <div className="number number9"><div>9</div></div>
            <div className="number number10"><div>10</div></div>
            <div className="number number11"><div>11</div></div>
            <div className="number number12"><div>12</div></div>

            <button className="btn mode">Dark Mode</button>
            <button className="btn zone">New York</button>
            <button>Tokyo</button>
            <button className="btn zone">Moscow</button>
            <button className="btn zone">Hong Kong</button>



        </div >

    )
}
export default Clock