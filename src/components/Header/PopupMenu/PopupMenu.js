import React, {useState} from 'react';
import classes from "./PopupMenu.module.scss"

const PopupMenu = ({isOpen}) => {

    const popupMenuCls = [classes.PopupMenu];

    if (isOpen) {
        popupMenuCls.push(classes.open);
    }


    return (
        <div className={popupMenuCls.join(" ")}>

        </div>
    );
};

export default PopupMenu;