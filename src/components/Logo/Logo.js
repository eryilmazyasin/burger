import React from 'react'

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';
function Logo() {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="burger"/>
        </div>
    )
}

export default Logo;
