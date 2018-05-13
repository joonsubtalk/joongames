import React, { Component } from 'react';
import Header from '../../Header/Header';

class Level001 extends Component {

    state = {
        level: 0,
        title: 'Once upon a time...'
    }

    render() {

        return (
            <div className="o-stage">

                <div className="o-stage__container">

                    <Header {...this.state} />

                    <div className="o-stage__camera">

                    </div>
                </div>

            </div>
        )
    }

}

export default Level001;