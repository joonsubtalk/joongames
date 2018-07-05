import React, { Component } from 'react'

export default class SummonBar extends Component {

    state = {
        power : 0,
        timer : () => {}
    }

    theTimer = () => {
        if (this.state.power > 100) {
            this.setState({power : 0})
        }
        this.setState({power : this.state.power += 2})
    }
    stopTimer = () => {
        clearInterval(this.state.timer);
    }
    pressHandler = () => {
        const pressedTimerFunc = setInterval(this.theTimer, 250);
        this.setState({timer : pressedTimerFunc});
        this.props.summonFunc();
    }
    releaseHandler = () => {
        clearInterval(this.state.timer);
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
        onMouseLeave={this.releaseHandler}>Summon</div>
      </div>
    )
  }
}
