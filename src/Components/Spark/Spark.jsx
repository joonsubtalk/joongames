import React from 'react'
import Character from '../Characters/Character';

export default class Spark extends Character {

  componentDidMount() {
    this.triggerBlink(this.state.blink);
  }

  render() {

  const { blink } = this.state;
  const shouldBlink = blink ? 'c-spark--blink':'';

  return (
      <div className={`c-spark ${shouldBlink}`}>
        <div className="c-spark__shadow"></div>
        <div className="c-spark__flames">
            <div className="c-spark__flame"></div>
            <div className="c-spark__flame"></div>
            <div className="c-spark__flame"></div>
            <div className="c-spark__flame"></div>
        </div>
        <div className="c-spark__head"></div>
        <div className="c-spark__frontshadow">
            <div className="c-spark__fronthead"></div>
        </div>
        <div className="c-spark__mouthcontainer">
            <div className="c-spark__mouth"></div>
        </div>
        <div className="c-spark__lefteye"></div>
        <div className="c-spark__righteye"></div>
      </div>
    )
  }
}
