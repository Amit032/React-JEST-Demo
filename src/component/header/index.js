import React from 'react'
import './style.scss'

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap" data-test="wrap">
                <div className="">
                    Header
                </div>
            </div>
        </header>
    )
};

export default Header