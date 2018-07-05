import React from 'react'
import Character from '../Characters/Character';

export default class Bud extends Character {

    componentDidMount() {
        this.triggerBlink(this.state.blink);
    }

  render() {

    const { blink } = this.state;
    const shouldBlink = blink ? 'c-bud--blink':'';

    return (
        <div className={`c-bud ${shouldBlink}`}>
            <div className="c-bud__shadow"></div>
            <div className="c-bud__leaves">
                <div className="c-bud__leaf">
                    <div className="c-bud__plume"></div>
                </div>
                <div className="c-bud__leaf">
                    <div className="c-bud__plume"></div>
                </div>
            </div>
            <div className="c-bud__head"></div>
            <div className="c-bud__frontshadow">
                <div className="c-bud__fronthead"></div>
            </div>
            <div className="c-bud__mouthcontainer">
                <div className="c-bud__mouth"></div>
            </div>
            <div className="c-bud__lefteye"></div>
            <div className="c-bud__righteye"></div>
        </div>
    )
  }
}
