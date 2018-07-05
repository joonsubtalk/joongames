import React, { Component } from 'react'

class Character extends Component {

  state = {
    blink : false,
    blinkIntervalFn : () => {}
  }

  componentDidMount() {
    this.triggerBlink(this.state.blink);
  }

  toggleBlink = () => {
    this.setState({blink: !this.state.blink});
    clearInterval(this.state.blinkIntervalFn);
    this.triggerBlink(this.state.blink);
  }

  triggerBlink = (isBlinking) => {
    const time = isBlinking ? 250 : Math.random() * 5 * 1000 + 1000;
    const blinkInterval = setInterval(this.toggleBlink, time);
    
    this.setState({blinkIntervalFn: blinkInterval});
  }

  render() {

    const { blink } = this.state;
    const shouldBlink = blink ? 'c-character--blink':'';

    return (
      <div className={`c-character ${shouldBlink}`}>
        <div className="c-character__shadow"></div>
        <div className="c-character__head"></div>
        <div className="c-character__frontshadow">
            <div className="c-character__fronthead"></div>
          </div>
        <div className="c-character__lefteye"></div>
        <div className="c-character__righteye"></div>
      </div>
    )
  }
}

export default Character;
