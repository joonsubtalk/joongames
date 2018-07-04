import React, { Component } from 'react'

class Character extends Component {
  render() {
    return (
      <div className="c-character">
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
