import React from "react";
import style from "./Layout.module.css"

const Layout = ({id = 1, title = "Title", urlBg = null, colorBg = null, children}) => {
    const styledSection = {
        backgroundImage: urlBg ? `url(${urlBg})` : 'none',
        backgroundColor: colorBg ? colorBg : 'none'

    }
    return <>
        <section className={style.root} id={id} style={styledSection}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        {title && <h3>{title}</h3>}
                        <span className={style.separator}></span>
                    </div>
                    <div className={`${style.desc} ${style.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    </>
}

export default Layout;