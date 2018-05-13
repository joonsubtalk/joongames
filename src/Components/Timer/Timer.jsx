import React, { Component } from 'react';
import {GAME_HEIGHT, GAME_WIDTH} from '../../configs/variables';

class Timer extends Component {

    state = {
        timePassed : 0,
        timeLeft : 3
    }

    render() {

        return (
            <div className="o-timer">
                <div className="o-timer__bracket">
                    <div className="o-timer__timeLeft"></div>
                    <div className="o-timer__timePassed"></div>
                </div>
            </div>
        )
    }

}

export default Timer;