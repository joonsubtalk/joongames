import React, { Component } from 'react'

export default class SummonBar extends Component {

    state = {
        power : 0,
        holdIntervalFn : () => {}
    }

    holdTimerFn = () => {
        const newPower = this.state.power + 2;
        this.setState({power : newPower});
        console.log('holding');
    }

    pressHandler = () => {
        clearInterval(this.state.holdIntervalFn);
        this.setState({holdIntervalFn : () => {}});

        this.setState({holdIntervalFn : setInterval(this.holdTimerFn, 50)});

        console.log('down');
    }

    releaseHandler = () => {
        console.log('leave');

        clearInterval(this.state.holdIntervalFn);
        this.setState({power: 0, holdIntervalFn : () => {}});
    }

  render() {

    const style = {width: `${this.state.power}%`};

    return (
      <div className="o-summonbar">
        <div className="o-summonbar__meter">
            <div className="o-summonbar__empty">
                <div className="o-summonbar__progress" style={style}></div>
            </div>
        </div>
        <div className="o-summonbar__btn"
        onMouseDown ={this.pressHandler}
        onMouseLeave={this.releaseHandler}
        onMouseUp={this.releaseHandler}>
            <span className="o-summonbar__text">Summon</span>
        </div>
      </div>
    )
  }
}
