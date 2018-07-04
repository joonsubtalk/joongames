import React, { Component } from 'react'

export default class Bud extends Component {

  render() {
    return (
        <div className="c-bud">
            <div className="c-bud__shadow"></div>
            <div className="c-bud__leaves">
                <div className="c-bud__leaf"></div>
                <div className="c-bud__leaf"></div>
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
