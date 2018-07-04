import React, { Component } from 'react';
import Header from '../../Header/Header';
import Character from '../../Characters/Character';
import Spark from '../../Spark/Spark';
import Bud from '../../Bud/Bud';

class Level001 extends Component {

    state = {
        level: 0,
        title: 'Once upon a time...',
        fps :  50
    }

    componentDidMount() {

    }

    update = () => {
        // updates
    }

    draw = () => {
        // actions
    }

    run = () => {
        this.update();
        this.draw();
    }

    startTimer = () => {

        // intervalID = setInterval(this.run, 1000/this.state.fps);

    }

    endTimer = () => {

        // clearInterval(intervalID);

    }

    btnHandler = (e) => {

        console.log(e.target.innerText)
    }

    render() {

        return (
            <div className="o-stage">

                <div className="o-stage__container">

                    <Header {...this.state} />

                    <div className="o-stage__camera">

                        <Character />
                        <Spark />
                        <Bud />

                    </div>

                </div>

            </div>
        )
    }

}

export default Level001;