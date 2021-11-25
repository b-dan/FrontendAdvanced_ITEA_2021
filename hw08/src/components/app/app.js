import React from "react";
import Stopwatch from "../stopwatch/stopwatch";

class App extends React.Component {
    state = {
        elapsedTime: 0,
        out: "00:00:00"
    }

    timeToString(time) {
        let diffInHrs = time / 3600000;
        let hh = Math.floor(diffInHrs);

        let diffInMin = (diffInHrs - hh) * 60;
        let mm = Math.floor(diffInMin);

        let diffInSec = (diffInMin - mm) * 60;
        let ss = Math.floor(diffInSec);

        let diffInMs = (diffInSec - ss) * 100;
        let ms = Math.floor(diffInMs);

        let formattedMM = mm.toString().padStart(2, "0");
        let formattedSS = ss.toString().padStart(2, "0");
        let formattedMS = ms.toString().padStart(2, "0");

        return `${formattedMM}:${formattedSS}:${formattedMS}`;
    }

    onInterval = () => {
        if (!this.state.timerInterval) {
            let startTime = Date.now() - this.state.elapsedTime;
            this.setState({ startTime: startTime });

            let timerInterval = setInterval(this.timer, 10);
            this.setState({ timerInterval: timerInterval });
        } else {
            let startTime = Date.now() - this.state.elapsedTime;
            this.setState({ startTime: startTime });

            // clearInterval(this.state.timerInterval);

            let timerInterval = setInterval(this.timer, 10);
            this.setState({ timerInterval: timerInterval });
        }

    }

    onClearInterval = () => {
        clearInterval(this.state.timerInterval);
    }

    timer = () => {
        let elapsedTime = Date.now() - this.state.startTime;
        this.setState({ elapsedTime: elapsedTime });

        let out = this.timeToString(elapsedTime);
        this.setState({ out: out });
    }

    elapsedTimeReset = () => {
        clearInterval(this.state.timerInterval);

        this.setState({ out: "00:00:00" });
        this.setState({ elapsedTime: 0 });
    }

    render() {
        return (
            <>
                <Stopwatch onInterval={this.onInterval} out={this.state.out} onClearInterval={this.onClearInterval} elapsedTimeReset={this.elapsedTimeReset} />
                {/* {<section>
                    {this.state.out}
                </section>} */}
            </>
        )
    }
}

export default App