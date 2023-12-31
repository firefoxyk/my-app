import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) =>{
    let path = "/dialogs/"+props.id;

    return  <div className={classes.dialog}>
    <NavLink to={path} className={({isActive}) => (isActive ? classes.active : classes.dialog)}>{props.name}</NavLink>
    </div>
}

export default DialogItem;
