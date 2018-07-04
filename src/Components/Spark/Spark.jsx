import React, { Component } from 'react'

export default class Spark extends Component {
  render() {
    return (
      <div className="c-spark">
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
