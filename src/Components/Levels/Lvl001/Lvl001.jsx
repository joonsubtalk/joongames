import React, { Component } from 'react';
import Header from '../../Header/Header';
import Character from '../../Characters/Character';

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

                        <div className="o-stage__buttons">
                            <button onClick={this.btnHandler} className="o-stage__button">1</button>
                            <button onClick={this.btnHandler} className="o-stage__button">2</button>
                            <button onClick={this.btnHandler} className="o-stage__button">3</button>
                            <button onClick={this.btnHandler} className="o-stage__button">4</button>
                            <button onClick={this.btnHandler} className="o-stage__button">5</button>
                            <button onClick={this.btnHandler} className="o-stage__button">6</button>
                            <button onClick={this.btnHandler} className="o-stage__button">7</button>
                            <button onClick={this.btnHandler} className="o-stage__button">8</button>
                            <button onClick={this.btnHandler} className="o-stage__button">9</button>
                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default Level001;