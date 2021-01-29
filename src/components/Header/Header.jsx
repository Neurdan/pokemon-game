import React from "react";
import style from "./Header.module.css"

const Header = ({title, descr}) => {
    return <>
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                {title && <h1>{title}e</h1>}
                {descr && <p>{descr}</p>}
            </div>
        </header>
    </>
}

export default Header;