import React from 'react'
import Character from '../Characters/Character';

export default class Drop extends Character {

    componentDidMount() {
        this.triggerBlink(this.state.blink);
    }

    render() {

        const { blink } = this.state;
        const { style } = this.props;
        const shouldBlink = blink ? 'c-drop--blink':'';

        return (
            <div className={`c-drop ${shouldBlink}`} style={style}>
                <div className="c-drop__shadow"></div>
                {/* <div className="c-drop__flames">
                    <div className="c-drop__flame"></div>
                    <div className="c-drop__flame"></div>
                    <div className="c-drop__flame"></div>
                    <div className="c-drop__flame"></div>
                    <div className="c-drop__flame"></div>
                </div> */}
                <div className="c-drop__droplets">
                    <div className="c-drop__droplet"></div>
                    <div className="c-drop__droplet"></div>
                </div>
                <div className="c-drop__head"></div>
                <div className="c-drop__frontshadow">
                    <div className="c-drop__fronthead"></div>
                </div>
                <div className="c-drop__mouthcontainer">
                    <div className="c-drop__mouth"></div>
                </div>
                <div className="c-drop__lefteye"></div>
                <div className="c-drop__righteye"></div>
            </div>
        )
    }
}
