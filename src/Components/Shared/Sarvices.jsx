import React from 'react';
import classes from "../../Style/nav/secondaryNav.module.css"

const Sarvices = ({ title,icon }) => {
    return (
        <div className={classes.main}>
            {icon}
            <h5>{title}</h5>
        </div>
    );
}

export default Sarvices;
