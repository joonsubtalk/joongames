import React,{ Component } from 'react';
import Timer from '../Timer/Timer';

class Header extends Component {

    render() {

        const {
            level,
            title
        } = this.props;

        return (
            <div className="o-header">
                <div className="o-header__top">
                    <div className="o-header__title">{title}</div>
                    <div className="o-header__level">Level {level}</div>
                </div>
                <div className="o-header__bottom">
                    <Timer />
                </div>
            </div>
        )
    }
}

export default Header;