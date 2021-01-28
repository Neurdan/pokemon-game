import React from "react";
import style from "./Layout.module.css"

const Layout = ({id = 1, title = "Title", descr = "desc", urlBg = null, colorBg = null}) => {
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
                        <span className="sep arator"></span>
                    </div>
                    <div className={style.desc + style.full}>
                        {descr && <p>{descr}</p>}
                    </div>
                </article>
            </div>
        </section>
    </>
}

export default Layout;