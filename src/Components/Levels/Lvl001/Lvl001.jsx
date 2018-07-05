import React, { Component } from 'react';
import Header from '../../Header/Header';
import Character from '../../Characters/Character';
import Spark from '../../Spark/Spark';
import Bud from '../../Bud/Bud';
import Drop from '../../Drop/Drop';
import SummonBar from '../../SummonBar/SummonBar';

class Level001 extends Component {

    state = {
        level: 0,
        title: 'Once upon a time...',
        shake: false
    }

    componentDidMount() {
        requestAnimationFrame(this.loop);
    }

    update = () => {

    }

    draw = () => {
        // actions

    }

    loop = () => {
        this.update();
        this.draw();
        requestAnimationFrame(this.loop);
    }

    btnHandler = (e) => {
        //console.log(e.target.innerText)
        this.setState({shake: true});
        setTimeout(()=>{
            this.setState({shake: false});
        }, 200);
    }

    summonHandler = (e) => {
        this.setState({shake: true});
        setTimeout(()=>{
            this.setState({shake: false});
        }, 200);
    }

    render() {
        const { shake } = this.state;
        const shakeAnimation = shake ? 'o-stage--shake' : '';

        return (
            <div className={`o-stage ${shakeAnimation}`}>

                <div className="o-stage__container">

                    <Header {...this.state} />

                    <div className="o-stage__camera" onClick={this.btnHandler}>
                        <Character />
                        <Drop/>
                        <Spark />
                        <Bud />
                    </div>
                    <div className="o-stage__hud">
                        <SummonBar summonFunc={this.summonHandler}/>
                    </div>

                </div>

            </div>
        )
    }

}

export default Level001;