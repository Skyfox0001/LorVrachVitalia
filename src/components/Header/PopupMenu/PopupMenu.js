import React, {useState} from 'react';
import classes from "./PopupMenu.module.scss"

const PopupMenu = ({isOpen}) => {
    const [state, setState] = useState({
        list : [
            //{link: "link", name: "Главная"},
            {link: "link", name: "Вопросы"},
            {link: "link", name: "Статьи"},
            {link: "link", name: "Регистрация"},
        ],
        contacts:
            {link: "link", name: "Контакты"},

    });
    const popupMenuCls = [classes.PopupMenu];

    if (isOpen) {
        popupMenuCls.push(classes.open);
    }


    let menu  = state.list.map((element, index)=>{
        return(
            <div className={classes.element} key={index}>
                <a href={element.link}>{element.name}</a>
            </div>
        )
    })
    return (
        <div className={popupMenuCls.join(" ")}>
            <div className={classes.menuLinks}>
                {menu}
                <div className={classes.line}></div>
                <div className={classes.contacts}>
                    <p>{state.contacts.name}</p>
                </div>
            </div>
        </div>
    );
};

export default PopupMenu;