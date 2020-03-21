import React from 'react';

import classes from './vertical-bar.module.scss';

const VerticalBar = (props) => {
return (
    <div id={props.id} className={`${classes.verticalBar} bar`} style={{height: props.hgt * 10}}></div>
)
}

export default VerticalBar;